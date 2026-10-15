import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { ToggleGroup } from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh w-full">
      <header className="border-b flex gap-2 h-12 items-center px-4 shrink-0">
        <Breadcrumb className="max-sm:hidden" aria-label="breadcrumb">
          <BreadcrumbList className="flex-nowrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                Agents
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </BreadcrumbSeparator>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-semibold min-w-0 text-sm truncate">
          Collections Agent
        </h1>
        <Separator className="data-vertical:self-center h-4 max-md:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
        <p className="flex gap-1.5 items-center max-md:sr-only min-w-0 text-muted-foreground text-xs">
          <span className="shrink-0 tabular-nums">
            9 steps, 3 paths
          </span>
          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="flex gap-1.5 items-center shrink-0">
            <span className="sr-only">
              Draft 4 by Hanna Berg
            </span>
            <Avatar className="size-4" size="default" aria-hidden="true">
              <AvatarImage alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <span aria-hidden="true">
              Draft 4
            </span>
          </span>
        </p>
        <div className="flex gap-2 items-center ms-auto shrink-0">
          <Popover>
          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
          <Select>
          <SelectTrigger className="max-lg:hidden" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Model">
            <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
              <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
            </svg>
            <SelectValue>
              Sonnet 5
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              ▼
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="Claude Sonnet 5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add step
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
            Run test
          </Button>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Agent actions" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 min-h-0 overflow-hidden relative">
        <div className="[--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:var(--border)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-controls-box-shadow:none] [--xy-controls-button-background-color-hover:var(--muted)] [--xy-controls-button-background-color:var(--card)] [--xy-controls-button-border-color:var(--border)] [--xy-controls-button-color-hover:var(--foreground)] [--xy-controls-button-color:var(--foreground)] [--xy-edge-label-background-color:var(--card)] [--xy-edge-label-color:var(--muted-foreground)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke-width:1] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-muted/30 flex-1 min-h-0 relative">
          <div className="light react-flow" data-testid="rf__wrapper" role="application" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
            <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(192px, 32px) scale(1)"}}>
                  <div className="react-flow__edges">
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="overdue->ledger" data-testid="rf__edge-overdue->ledger" aria-label="Edge from overdue to ledger" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="overdue->ledger" d="M448.5 82.5L448.5 102.5L448.5 111.5L448.5 111.5L448.5 120.5L448.5 140.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 82.5L448.5 102.5L448.5 111.5L448.5 111.5L448.5 120.5L448.5 140.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="ledger->triage" data-testid="rf__edge-ledger->triage" aria-label="Edge from ledger to triage" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="ledger->triage" d="M448.5 225.5L448.5 245.5L448.5 254.5L448.5 254.5L448.5 263.5L448.5 283.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 225.5L448.5 245.5L448.5 254.5L448.5 254.5L448.5 263.5L448.5 283.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->charges" data-testid="rf__edge-triage->charges" aria-label="Edge from triage to charges" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="triage->charges" d="M448.5 368.5L448.5 388.5L 448.5,393Q 448.5,397.5 453,397.5L 764,397.5Q 768.5,397.5 768.5,402L768.5 406.5L768.5 426.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 368.5L448.5 388.5L 448.5,393Q 448.5,397.5 453,397.5L 764,397.5Q 768.5,397.5 768.5,402L768.5 406.5L768.5 426.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="charges->assign" data-testid="rf__edge-charges->assign" aria-label="Edge from charges to assign" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="charges->assign" d="M768.5 511.5L768.5 531.5L768.5 540.5L768.5 540.5L768.5 549.5L768.5 569.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M768.5 511.5L768.5 531.5L768.5 540.5L768.5 540.5L768.5 549.5L768.5 569.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->terms" data-testid="rf__edge-triage->terms" aria-label="Edge from triage to terms" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="triage->terms" d="M448.5 368.5L448.5 388.5L448.5 397.5L448.5 397.5L448.5 406.5L448.5 426.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 368.5L448.5 388.5L448.5 397.5L448.5 397.5L448.5 406.5L448.5 426.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="terms->confirm" data-testid="rf__edge-terms->confirm" aria-label="Edge from terms to confirm" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="terms->confirm" d="M448.5 511.5L448.5 531.5L448.5 540.5L448.5 540.5L448.5 549.5L448.5 569.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 511.5L448.5 531.5L448.5 540.5L448.5 540.5L448.5 549.5L448.5 569.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->redact" data-testid="rf__edge-triage->redact" aria-label="Edge from triage to redact" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="triage->redact" d="M448.5 368.5L448.5 388.5L 448.5,393Q 448.5,397.5 444,397.5L 133,397.5Q 128.5,397.5 128.5,402L128.5 406.5L128.5 426.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M448.5 368.5L448.5 388.5L 448.5,393Q 448.5,397.5 444,397.5L 133,397.5Q 128.5,397.5 128.5,402L128.5 406.5L128.5 426.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="redact->callback" data-testid="rf__edge-redact->callback" aria-label="Edge from redact to callback" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="redact->callback" d="M128.5 511.5L128.5 531.5L128.5 540.5L128.5 540.5L128.5 549.5L128.5 569.5" fill="none" style={{strokeWidth: "1"}}></path>
                        <path className="react-flow__edge-interaction" d="M128.5 511.5L128.5 531.5L128.5 540.5L128.5 540.5L128.5 549.5L128.5 569.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="react-flow__edgelabel-renderer">
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(448.5px, 111.5px)"}}>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(448.5px, 254.5px)"}}>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(768.5px, 397.5px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-opacity">
                        Disputed
                      </Badge>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the Disputed path">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(768.5px, 540.5px)"}}>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(448.5px, 397.5px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-opacity">
                        Promised
                      </Badge>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the Promised path">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(448.5px, 540.5px)"}}>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(128.5px, 397.5px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-opacity">
                        No reply
                      </Badge>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the No reply path">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="absolute flex items-center justify-center nodrag nopan pointer-events-auto" style={{transform: "translate(-50%, -50%) translate(128.5px, 540.5px)"}}>
                      <Button className="absolute bg-background border-(--xy-edge-stroke) data-revealed:opacity-100 focus-visible:opacity-100 motion-reduce:transition-none opacity-0 rounded-full transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="overdue" data-testid="rf__node-overdue" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 0px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg fill="none" viewBox="100 100 312 312">
                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Stripe
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Invoice 3 days overdue
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Passed
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                inv_9412
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                EUR 4,180
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="overdue" data-handlepos="bottom" data-id="1-overdue-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="ledger" data-testid="rf__node-ledger" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 143px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                <defs>
                                  <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                    <stop offset="0%" stopColor="#62F755"></stop>
                                    <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                  </lineargradient>
                                  <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                    <stop offset="0%" stopOpacity=".9"></stop>
                                    <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                  </lineargradient>
                                </defs>
                                <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Neon
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Runs query_db on invoices
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Neon" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Passed
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                1 row
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                42ms
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="ledger" data-handlepos="top" data-id="1-ledger-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="ledger" data-handlepos="bottom" data-id="1-ledger-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="triage" data-testid="rf__node-triage" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 286px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                                <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Claude Sonnet 5
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Triages the account
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Passed
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                1,842 tokens
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                USD 0.031
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="triage" data-handlepos="top" data-id="1-triage-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="triage" data-handlepos="bottom" data-id="1-triage-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="charges" data-testid="rf__node-charges" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(640px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg fill="none" viewBox="100 100 312 312">
                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Stripe
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Pulls the dispute evidence
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Skipped
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Branch not taken
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="charges" data-handlepos="top" data-id="1-charges-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="charges" data-handlepos="bottom" data-id="1-charges-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="assign" data-testid="rf__node-assign" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(640px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg viewBox="0 0 64 64" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.43828 50.2095C5.81176 49.4456 5.94882 48.3212 6.71918 47.7027L14.0169 41.8433C14.6535 41.3322 15.5841 41.4476 16.1032 42.0777C21.06 48.0956 26.32 50.8815 32.142 50.8815C37.9238 50.8815 43.0403 48.135 47.7801 42.1839C48.2888 41.5452 49.2172 41.4131 49.8629 41.9129L57.2604 47.6377C58.0415 48.2422 58.1989 49.3637 57.5855 50.1379C50.5775 58.9839 41.9971 63.6446 32.142 63.6446C22.3156 63.6446 13.6586 59.013 6.43828 50.2095Z" fill="url(#paint0_linear_8_569)"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M32.4953 17.1804C32.2202 16.9368 31.8067 16.9367 31.5314 17.1801L15.663 31.2116C15.0564 31.748 14.1285 31.6857 13.599 31.0731L7.40986 23.9122C6.88774 23.3082 6.95019 22.3961 7.54979 21.8688L31.0527 1.20062C31.6021 0.717503 32.4248 0.717611 32.9741 1.20088L56.4822 21.8847C57.0822 22.4125 57.1439 23.3256 56.6205 23.9294L50.4164 31.0866C49.8862 31.6982 48.9589 31.7594 48.353 31.2229L32.4953 17.1804Z" fill="url(#paint1_linear_8_569)"></path>
                                <defs>
                                  <lineargradient id="paint0_linear_8_569" x1="5.3335" y1="32.1624" x2="58.6653" y2="32.1624" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.225962" stopColor="#6647F0"></stop>
                                    <stop offset="0.793269" stopColor="#0091FF"></stop>
                                  </lineargradient>
                                  <lineargradient id="paint1_linear_8_569" x1="5.3335" y1="31.6447" x2="58.6653" y2="31.6447" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF02F0"></stop>
                                    <stop offset="0.778846" stopColor="#F76808"></stop>
                                  </lineargradient>
                                </defs>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  ClickUp
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Assigns Hanna Berg
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ClickUp" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Skipped
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Upstream skipped
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="assign" data-handlepos="top" data-id="1-assign-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="assign" data-handlepos="bottom" data-id="1-assign-null-source"></div>
                        </div>
                        <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                        <Button className="bg-background border-(--xy-edge-stroke) nodrag nopan rounded-full" type="button" tabIndex="0" aria-label="Add a step after ClickUp">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="terms" data-testid="rf__node-terms" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg fill="none" viewBox="100 100 312 312">
                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Stripe
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Offers a payment plan
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Passed
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                3 instalments
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                EUR 1,393
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="terms" data-handlepos="top" data-id="1-terms-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="terms" data-handlepos="bottom" data-id="1-terms-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="confirm" data-testid="rf__node-confirm" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg className="dark:hidden" viewBox="0 0 1800 1800" fill="none">
                                <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                              </svg>
                              <svg className="dark:block hidden" viewBox="0 0 1800 1800" fill="none">
                                <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Resend
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Emails the terms to Maren
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Resend" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-destructive">
                                <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m15 9-6 6"></path>
                                  <path d="m9 9 6 6"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Failed
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Bounced
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Retry queued
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="confirm" data-handlepos="top" data-id="1-confirm-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="confirm" data-handlepos="bottom" data-id="1-confirm-null-source"></div>
                        </div>
                        <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                        <Button className="bg-background border-(--xy-edge-stroke) nodrag nopan rounded-full" type="button" tabIndex="0" aria-label="Add a step after Resend">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="redact" data-testid="rf__node-redact" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                <path d="m16 18 6-6-6-6"></path>
                                <path d="m8 6-6 6 6 6"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  PII Guardrail
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Scans outbound text
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PII Guardrail" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Skipped
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Branch not taken
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="redact" data-handlepos="top" data-id="1-redact-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="redact" data-handlepos="bottom" data-id="1-redact-null-source"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group/node react-flow__node react-flow__node-agent selectable" data-id="callback" data-testid="rf__node-callback" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="flex flex-col items-center w-64">
                        <div className="relative w-full">
                          <Item className="bg-card data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring overflow-hidden p-2" variant="outline" size="xs">
                            <IconTile variant="outline" size="sm">
                              <svg viewBox="0 0 2447.6 2452.5">
                                <g clipRule="evenodd" fillRule="evenodd">
                                  <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                  <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                  <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                  <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                </g>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-semibold leading-4 text-[13px] w-full">
                                <span className="truncate">
                                  Slack
                                </span>
                              </ItemTitle>
                              <ItemDescription className="leading-4 line-clamp-1 text-[13px]">
                                Posts to #collections
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center nodrag outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Slack" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                            <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                              <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </span>
                              <span className="sr-only">
                                Skipped
                              </span>
                              <span className="tabular-nums text-muted-foreground text-xs truncate">
                                Upstream skipped
                              </span>
                            </ItemFooter>
                          </Item>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top target" data-nodeid="callback" data-handlepos="top" data-id="1-callback-null-target"></div>
                          <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom source" data-nodeid="callback" data-handlepos="bottom" data-id="1-callback-null-source"></div>
                        </div>
                        <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                        <Button className="bg-background border-(--xy-edge-stroke) nodrag nopan rounded-full" type="button" tabIndex="0" aria-label="Add a step after Slack">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="react-flow__viewport-portal"></div>
                </div>
              </div>
            </div>
            <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <pattern id="pattern-1" x="0" y="8" width="24" height="24" patternUnits="userSpaceOnUse" patterntransform="translate(-12,-12)">
                <circle className="dots react-flow__background-pattern" cx="1" cy="1" r="1"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
            </svg>
            <div className="bottom left m-6! react-flow__panel">
              <Card className="flex-row gap-1 items-center p-1" size="sm" role="group" aria-label="Canvas controls">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" size="sm" spacing="0.5" aria-label="Canvas tool" style={{"--gap": "0.5"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="default" size="sm" spacing="0.5" aria-label="Select" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MousePointer2Icon" tabler="IconPointer" hugeicons="Cursor01Icon" phosphor="CursorIcon" remixicon="RiCursorLine" aria-hidden="true">
                      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="default" size="sm" spacing="0.5" aria-label="Pan" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-hand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HandIcon" tabler="IconHandStop" hugeicons="HandIcon" phosphor="HandIcon" remixicon="RiHand" aria-hidden="true">
                      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ToggleGroup>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-0.5 items-center" role="group" aria-label="Zoom">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 tabular-nums transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 100%" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                    100%
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <div className="flex gap-0.5 items-center" role="group" aria-label="Layout">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tidy tree" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                      <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                      <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                      <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </Card>
            </div>
            <div className="bottom center react-flow__attribution react-flow__panel" data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev?utm_source=attribution">
              <a href="https://reactflow.dev?utm_source=attribution" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
                React Flow
              </a>
            </div>
            <div id="react-flow__node-desc-1" style={{display: "none"}}>
              Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.
            </div>
            <div id="react-flow__edge-desc-1" style={{display: "none"}}>
              Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.
            </div>
            <div id="react-flow__aria-live-1" aria-live="assertive" aria-atomic="true" style={{position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)"}}></div>
          </div>
        </div>
        <div className="absolute border-s duration-300 ease-in-out end-0 inset-y-0 motion-reduce:transition-none transition-[translate] translate-x-full w-96 z-10" role="complementary" aria-label="Node details" aria-hidden="true" inert="">
          <div className="bg-card flex flex-col h-full">
            <header className="border-b flex gap-3 items-start px-4 py-3 shrink-0">
              <IconTile variant="outline" size="sm">
                <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </IconTile>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <h2 className="font-semibold text-sm truncate"></h2>
                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    Custom Code
                  </Badge>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate"></span>
                </div>
              </div>
              <Button className="-me-1.5 -mt-1" type="button" tabIndex="0" aria-label="Close node details">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </header>
            <div className="flex flex-1 flex-col gap-5 min-h-0 overflow-y-auto p-4">
              <section className="flex flex-col gap-3" aria-labelledby="node-facts">
                <h3 className="font-semibold text-sm" id="node-facts">
                  Step
                </h3>
                <dl className="flex flex-col gap-3">
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Detail
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      App
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Next steps
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                      0
                    </dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Last run
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                  <div className="flex gap-4 items-start justify-between text-sm">
                    <dt className="min-w-0 text-muted-foreground">
                      Result
                    </dt>
                    <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                  </div>
                </dl>
              </section>
            </div>
            <footer className="border-t p-4 shrink-0">
              <Button className="w-full" type="button" tabIndex="0">
                Edit step
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
