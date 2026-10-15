import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Alert,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
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
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
      <header className="border-b gap-3 grid grid-cols-[1fr_auto_1fr] h-12 items-center px-4 shrink-0">
        <div className="flex gap-2 items-center min-w-0">
          <Breadcrumb className="max-sm:hidden" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  {"Pipelines"}
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
            {"Nightly Ledger Sync"}
          </h1>
          <Separator className="data-vertical:self-center h-4 max-xl:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <p className="flex gap-1.5 items-center max-xl:sr-only min-w-0 text-muted-foreground text-xs">
            <span className="font-mono shrink-0">
              {"run_3f9a1c"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="flex gap-1.5 items-center shrink-0">
              <span className="sr-only">
                {"Started 02:00 UTC, owned by Tomas Lindqvist"}
              </span>
              <Avatar className="size-4" size="default" aria-hidden="true">
                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="tabular-nums" aria-hidden="true">
                {"02:00 UTC"}
              </span>
            </span>
          </p>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {"Run idle, 7 of 8 tasks settled"}
        </p>
        <div className="gap-2 items-center justify-center lg:flex max-lg:sr-only w-72">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span>
              {"Failed"}
            </span>
            <span className="tabular-nums">
              {"1"}
            </span>
          </Badge>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
            <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="10" x2="10" y1="15" y2="9"></line>
              <line x1="14" x2="14" y1="15" y2="9"></line>
            </svg>
            <span className="sr-only">
              {"Waiting"}
            </span>
            <span className="tabular-nums">
              {"2"}
            </span>
          </Badge>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
            <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span className="sr-only">
              {"Queued"}
            </span>
            <span className="tabular-nums">
              {"1"}
            </span>
          </Badge>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span className="sr-only">
              {"Succeeded"}
            </span>
            <span className="tabular-nums">
              {"4"}
            </span>
          </Badge>
        </div>
        <div className="col-start-3 flex gap-2 items-center justify-end">
          <Popover>
          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
          <div className="flex gap-2 items-center shrink-0">
            <div className="flex justify-end max-sm:hidden min-w-28">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"Add task"}
              </Button>
            </div>
            <ButtonGroup role="group">
              <Button type="button" tabIndex="0">
                <svg className="fill-current lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                {"Run"}
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Run options" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </div>
      </header>
      <div className="flex flex-1 min-h-0 overflow-hidden relative">
        <div className="[--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:var(--border)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-controls-box-shadow:none] [--xy-controls-button-background-color-hover:var(--muted)] [--xy-controls-button-background-color:var(--card)] [--xy-controls-button-border-color:var(--border)] [--xy-controls-button-color-hover:var(--foreground)] [--xy-controls-button-color:var(--foreground)] [--xy-edge-label-background-color:var(--card)] [--xy-edge-label-color:var(--muted-foreground)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke-width:1] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-muted/30 flex-1 min-h-0 relative">
          <div className="light react-flow" data-testid="rf__wrapper" role="application" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
            <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(86px, -14px) scale(0.945423)"}}>
                  <div className="react-flow__edges">
                    <svg className="react-flow__marker" aria-hidden="true">
                      <defs>
                        <marker className="react-flow__arrowhead" id="1__height=12&type=arrowclosed&width=12" markerwidth="12" markerheight="12" viewBox="-10 -10 20 20" markerUnits="strokeWidth" orient="auto-start-reverse" refX="0" refY="0">
                          <polyline className="arrowclosed" strokeLinecap="round" strokeLinejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style={{strokeWidth: "1", stroke: "rgb(177, 177, 183)", fill: "rgb(177, 177, 183)"}}></polyline>
                        </marker>
                      </defs>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="schedule-stripe" data-testid="rf__edge-schedule-stripe" aria-label="Edge from nightly_schedule to extract_stripe" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="schedule-stripe" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M107.35940409683427 223.7094972067039L127.35940409683427 223.7094972067039L 142.95716945996276,223.7094972067039Q 154.95716945996276,223.7094972067039 154.95716945996276,211.7094972067039L 154.95716945996276,80.22346368715084Q 154.95716945996276,68.22346368715084 166.95716945996276,68.22346368715084L181.49720670391062 68.22346368715084L201.49720670391062 68.22346368715084" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M107.35940409683427 223.7094972067039L127.35940409683427 223.7094972067039L 142.95716945996276,223.7094972067039Q 154.95716945996276,223.7094972067039 154.95716945996276,211.7094972067039L 154.95716945996276,80.22346368715084Q 154.95716945996276,68.22346368715084 166.95716945996276,68.22346368715084L181.49720670391062 68.22346368715084L201.49720670391062 68.22346368715084" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="schedule-paypal" data-testid="rf__edge-schedule-paypal" aria-label="Edge from nightly_schedule to extract_paypal" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="schedule-paypal" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M107.35940409683427 223.7094972067039L127.35940409683427 223.7094972067039L 142.95716945996276,223.7094972067039Q 154.95716945996276,223.7094972067039 154.95716945996276,235.7094972067039L 154.95716945996276,368.2532588454376Q 154.95716945996276,380.2532588454376 166.95716945996276,380.2532588454376L181.49720670391062 380.2532588454376L201.49720670391062 380.2532588454376" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M107.35940409683427 223.7094972067039L127.35940409683427 223.7094972067039L 142.95716945996276,223.7094972067039Q 154.95716945996276,223.7094972067039 154.95716945996276,235.7094972067039L 154.95716945996276,368.2532588454376Q 154.95716945996276,380.2532588454376 166.95716945996276,380.2532588454376L181.49720670391062 380.2532588454376L201.49720670391062 380.2532588454376" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="stripe-dedupe" data-testid="rf__edge-stripe-dedupe" aria-label="Edge from extract_stripe to dedupe_payments" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="stripe-dedupe" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M271.3072625698324 68.22346368715084L291.3072625698324 68.22346368715084L 306.9050279329609,68.22346368715084Q 318.9050279329609,68.22346368715084 318.9050279329609,80.22346368715084L 318.9050279329609,211.7094972067039Q 318.9050279329609,223.7094972067039 330.9050279329609,223.7094972067039L345.44506517690877 223.7094972067039L365.44506517690877 223.7094972067039" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M271.3072625698324 68.22346368715084L291.3072625698324 68.22346368715084L 306.9050279329609,68.22346368715084Q 318.9050279329609,68.22346368715084 318.9050279329609,80.22346368715084L 318.9050279329609,211.7094972067039Q 318.9050279329609,223.7094972067039 330.9050279329609,223.7094972067039L345.44506517690877 223.7094972067039L365.44506517690877 223.7094972067039" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="paypal-dedupe" data-testid="rf__edge-paypal-dedupe" aria-label="Edge from extract_paypal to dedupe_payments" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="paypal-dedupe" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M271.3072625698324 380.2532588454376L291.3072625698324 380.2532588454376L 306.9050279329609,380.2532588454376Q 318.9050279329609,380.2532588454376 318.9050279329609,368.2532588454376L 318.9050279329609,235.7094972067039Q 318.9050279329609,223.7094972067039 330.9050279329609,223.7094972067039L345.44506517690877 223.7094972067039L365.44506517690877 223.7094972067039" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M271.3072625698324 380.2532588454376L291.3072625698324 380.2532588454376L 306.9050279329609,380.2532588454376Q 318.9050279329609,380.2532588454376 318.9050279329609,368.2532588454376L 318.9050279329609,235.7094972067039Q 318.9050279329609,223.7094972067039 330.9050279329609,223.7094972067039L345.44506517690877 223.7094972067039L365.44506517690877 223.7094972067039" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="dedupe-reconcile" data-testid="rf__edge-dedupe-reconcile" aria-label="Edge from dedupe_payments to reconcile_ledger" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="dedupe-reconcile" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M435.2551210428305 223.7094972067039L455.2551210428305 223.7094972067039L 524.7970204841713,223.7094972067039Q 536.7970204841713,223.7094972067039 536.7970204841713,211.7094972067039L 536.7970204841713,80.22346368715084Q 536.7970204841713,68.22346368715084 548.7970204841713,68.22346368715084L617.2811918063314 68.22346368715084L637.2811918063314 68.22346368715084" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M435.2551210428305 223.7094972067039L455.2551210428305 223.7094972067039L 524.7970204841713,223.7094972067039Q 536.7970204841713,223.7094972067039 536.7970204841713,211.7094972067039L 536.7970204841713,80.22346368715084Q 536.7970204841713,68.22346368715084 548.7970204841713,68.22346368715084L617.2811918063314 68.22346368715084L637.2811918063314 68.22346368715084" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="reconcile-invoices" data-testid="rf__edge-reconcile-invoices" aria-label="Edge from reconcile_ledger to build_invoices_daily" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="reconcile-invoices" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M707.0912476722532 68.22346368715084L727.0912476722532 68.22346368715084L792.7672253258845 68.22346368715084L792.7672253258845 68.22346368715084L857.3854748603352 68.22346368715084L877.3854748603352 68.22346368715084" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M707.0912476722532 68.22346368715084L727.0912476722532 68.22346368715084L792.7672253258845 68.22346368715084L792.7672253258845 68.22346368715084L857.3854748603352 68.22346368715084L877.3854748603352 68.22346368715084" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="dedupe-mrr" data-testid="rf__edge-dedupe-mrr" aria-label="Edge from dedupe_payments to publish_mrr" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="dedupe-mrr" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M435.2551210428305 223.7094972067039L455.2551210428305 223.7094972067039L 470.852886405959,223.7094972067039Q 482.852886405959,223.7094972067039 482.852886405959,235.7094972067039L 482.852886405959,368.2532588454376Q 482.852886405959,380.2532588454376 494.852886405959,380.2532588454376L509.39292364990683 380.2532588454376L529.3929236499068 380.2532588454376" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M435.2551210428305 223.7094972067039L455.2551210428305 223.7094972067039L 470.852886405959,223.7094972067039Q 482.852886405959,223.7094972067039 482.852886405959,235.7094972067039L 482.852886405959,368.2532588454376Q 482.852886405959,380.2532588454376 494.852886405959,380.2532588454376L509.39292364990683 380.2532588454376L529.3929236499068 380.2532588454376" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-flow selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="mrr-notify" data-testid="rf__edge-mrr-notify" aria-label="Edge from publish_mrr to notify_finance" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="mrr-notify" marker-end="url('#1__height=12&type=arrowclosed&width=12')" d="M814.9795158286778 380.2532588454376L834.9795158286778 380.2532588454376L846.7113594040968 380.2532588454376L846.7113594040968 380.2532588454376L857.3854748603352 380.2532588454376L877.3854748603352 380.2532588454376" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M814.9795158286778 380.2532588454376L834.9795158286778 380.2532588454376L846.7113594040968 380.2532588454376L846.7113594040968 380.2532588454376L857.3854748603352 380.2532588454376L877.3854748603352 380.2532588454376" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-feeds selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="stripe-conn" data-testid="rf__edge-stripe-conn" aria-label="Edge from conn_stripe to extract_stripe" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="stripe-conn" strokeDasharray="2.1154562383612663 4.230912476722533" d="M236.4022346368715 197.26629422718807L236.4022346368715 177.26629422718807L236.4022346368715 171.88081936685288L236.4022346368715 171.88081936685288L236.4022346368715 166.49534450651768L236.4022346368715 146.49534450651768" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M236.4022346368715 197.26629422718807L236.4022346368715 177.26629422718807L236.4022346368715 171.88081936685288L236.4022346368715 171.88081936685288L236.4022346368715 166.49534450651768L236.4022346368715 146.49534450651768" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-feeds selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="paypal-conn" data-testid="rf__edge-paypal-conn" aria-label="Edge from conn_paypal to extract_paypal" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="paypal-conn" strokeDasharray="2.1154562383612663 4.230912476722533" d="M236.4022346368715 509.29608938547483L236.4022346368715 489.29608938547483L236.4022346368715 483.91061452513964L236.4022346368715 483.91061452513964L236.4022346368715 478.52513966480444L236.4022346368715 458.52513966480444" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M236.4022346368715 509.29608938547483L236.4022346368715 489.29608938547483L236.4022346368715 483.91061452513964L236.4022346368715 483.91061452513964L236.4022346368715 478.52513966480444L236.4022346368715 458.52513966480444" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-feeds selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="dedupe-check" data-testid="rf__edge-dedupe-check" aria-label="Edge from check_charge_id to dedupe_payments" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="dedupe-check" strokeDasharray="2.1154562383612663 4.230912476722533" d="M400.35009310986965 352.7523277467412L400.35009310986965 332.7523277467412L400.35009310986965 328.42458100558656L400.35009310986965 328.42458100558656L400.35009310986965 323.03910614525137L400.35009310986965 303.03910614525137" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M400.35009310986965 352.7523277467412L400.35009310986965 332.7523277467412L400.35009310986965 328.42458100558656L400.35009310986965 328.42458100558656L400.35009310986965 323.03910614525137L400.35009310986965 303.03910614525137" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-feeds selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="reconcile-model" data-testid="rf__edge-reconcile-model" aria-label="Edge from model_ledger_v3 to reconcile_ledger" aria-describedby="react-flow__edge-desc-1">
                        <path className="motion-reduce:animate-none! react-flow__edge-path" id="reconcile-model" strokeDasharray="2.1154562383612663 4.230912476722533" d="M672.1862197392924 197.26629422718807L672.1862197392924 177.26629422718807L672.1862197392924 171.88081936685288L672.1862197392924 171.88081936685288L672.1862197392924 166.49534450651768L672.1862197392924 146.49534450651768" fill="none" style={{strokeWidth: "1.05773"}}></path>
                        <path className="react-flow__edge-interaction" d="M672.1862197392924 197.26629422718807L672.1862197392924 177.26629422718807L672.1862197392924 171.88081936685288L672.1862197392924 171.88081936685288L672.1862197392924 166.49534450651768L672.1862197392924 146.49534450651768" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="react-flow__edgelabel-renderer">
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(318.905px, 146.495px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        {"1.2M rows"}
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(318.905px, 301.981px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        {"384k rows"}
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(536.797px, 146.495px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        {"1.5M rows"}
                      </Badge>
                    </div>
                  </div>
                  <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="nightly_schedule" data-testid="rf__node-nightly_schedule" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 196px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-success dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-2 border-card dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Succeeded"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="nightly_schedule" data-handlepos="right" data-id="1-nightly_schedule-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"Nightly"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"02:00 UTC"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="extract_stripe" data-testid="rf__node-extract_stripe" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(164px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="extract_stripe" data-handlepos="left" data-id="1-extract_stripe-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-success dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg fill="none" viewBox="100 100 312 312">
                                <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-2 border-card dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Succeeded"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="extract_stripe" data-handlepos="right" data-id="1-extract_stripe-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"extract_stripe"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"2m 10s"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="extract_stripe" data-handlepos="bottom" data-id="1-extract_stripe-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="extract_paypal" data-testid="rf__node-extract_paypal" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(164px, 352px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="extract_paypal" data-handlepos="left" data-id="1-extract_paypal-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-success dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg viewBox="7.056000232696533 3 37.35095977783203 45">
                                <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                                  <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                                  <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                                  <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                                </g>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-2 border-card dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Succeeded"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="extract_paypal" data-handlepos="right" data-id="1-extract_paypal-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"extract_paypal"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"1m 48s"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="extract_paypal" data-handlepos="bottom" data-id="1-extract_paypal-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="dedupe_payments" data-testid="rf__node-dedupe_payments" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(328px, 196px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="dedupe_payments" data-handlepos="left" data-id="1-dedupe_payments-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-success dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                                <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                                <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                                <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                                <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                                <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                                <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                                <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-2 border-card dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Succeeded"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="dedupe_payments" data-handlepos="right" data-id="1-dedupe_payments-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"dedupe_payments"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"3m 12s"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="dedupe_payments" data-handlepos="bottom" data-id="1-dedupe_payments-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="reconcile_ledger" data-testid="rf__node-reconcile_ledger" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(600px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="reconcile_ledger" data-handlepos="left" data-id="1-reconcile_ledger-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-destructive dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                <path d="M12 7v14"></path>
                                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-2 border-card dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Failed"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="reconcile_ledger" data-handlepos="right" data-id="1-reconcile_ledger-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"reconcile_ledger"}
                          </span>
                          <span className="tabular-nums text-destructive text-xs truncate w-full">
                            {"Duplicate charge id"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="reconcile_ledger" data-handlepos="bottom" data-id="1-reconcile_ledger-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="build_invoices_daily" data-testid="rf__node-build_invoices_daily" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(840px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="build_invoices_daily" data-handlepos="left" data-id="1-build_invoices_daily-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                <path d="M13 16H8"></path>
                                <path d="M14 8H8"></path>
                                <path d="M16 12H8"></path>
                                <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border-2 border-card dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-xs transition-shadow">
                                <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                                <span className="sr-only">
                                  {"Queued"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="build_invoices_daily" data-handlepos="right" data-id="1-build_invoices_daily-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"build_invoices"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"Blocked upstream"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan opacity-0 pointer-events-none react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="build_invoices_daily" data-handlepos="bottom" data-id="1-build_invoices_daily-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-gate selectable" data-id="publish_mrr" data-testid="rf__node-publish_mrr" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(536px, 352px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 motion-reduce:transition-none relative transition-opacity">
                        <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="publish_mrr" data-handlepos="left" data-id="1-publish_mrr-in-target"></div>
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <Item className="bg-card border-warning dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 gap-2 h-14 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-68" variant="outline" size="xs">
                            <IconTile variant="outline" size="default">
                              <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                              </svg>
                            </IconTile>
                            <ItemContent className="gap-0 min-w-0">
                              <ItemTitle className="font-medium text-sm w-full">
                                <span className="truncate">
                                  {"publish_mrr"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="line-clamp-1 text-xs">
                                {"Awaiting Approval"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <Button className="nodrag nopan" type="button" tabIndex="0">
                                {"Approve"}
                              </Button>
                            </ItemActions>
                          </Item>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="publish_mrr" data-handlepos="right" data-id="1-publish_mrr-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-mark selectable" data-id="notify_finance" data-testid="rf__node-notify_finance" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(840px, 352px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-36">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <div className="-left-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="notify_finance" data-handlepos="left" data-id="1-notify_finance-in-target"></div>
                            <IconTile className="[--icon-tile-icon-size:--spacing(6)] bg-card border-warning dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="xl">
                              <svg viewBox="0 0 2447.6 2452.5">
                                <g clipRule="evenodd" fillRule="evenodd">
                                  <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                  <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                  <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                  <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                </g>
                              </svg>
                            </IconTile>
                            <span className="-translate-x-1/2 absolute bg-card bottom-0 flex left-1/2 rounded-full translate-y-1/2">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border-2 border-card dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-0 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                                <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="10" x2="10" y1="15" y2="9"></line>
                                  <line x1="14" x2="14" y1="15" y2="9"></line>
                                </svg>
                                <span className="sr-only">
                                  {"Waiting"}
                                </span>
                              </Badge>
                            </span>
                            <div className="-right-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="notify_finance" data-handlepos="right" data-id="1-notify_finance-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="font-medium text-sm truncate w-full">
                            {"notify_finance"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate w-full">
                            {"Holds for Approval"}
                          </span>
                        </div>
                        <div className="-bottom-1! connectableend connectablestart nodrag nopan opacity-0 pointer-events-none react-flow__handle react-flow__handle-bottom target" data-handleid="feeds" data-nodeid="notify_finance" data-handlepos="bottom" data-id="1-notify_finance-feeds-target"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-resource selectable" data-id="conn_stripe" data-testid="rf__node-conn_stripe" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(172px, 204px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-32">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <IconTile className="[--icon-tile-icon-size:--spacing(5)] bg-card dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="lg">
                              <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                <path d="m2 22 3-3"></path>
                                <path d="M7.5 13.5 10 11"></path>
                                <path d="M10.5 16.5 13 14"></path>
                                <path d="m18 3-4 4h6l-4 4"></path>
                              </svg>
                            </IconTile>
                            <div className="-top-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top source" data-handleid="out" data-nodeid="conn_stripe" data-handlepos="top" data-id="1-conn_stripe-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="text-sm truncate w-full">
                            {"stripe_prod"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate w-full">
                            {"Connection"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-resource selectable" data-id="conn_paypal" data-testid="rf__node-conn_paypal" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(172px, 516px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-32">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <IconTile className="[--icon-tile-icon-size:--spacing(5)] bg-card dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="lg">
                              <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                <path d="m2 22 3-3"></path>
                                <path d="M7.5 13.5 10 11"></path>
                                <path d="M10.5 16.5 13 14"></path>
                                <path d="m18 3-4 4h6l-4 4"></path>
                              </svg>
                            </IconTile>
                            <div className="-top-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top source" data-handleid="out" data-nodeid="conn_paypal" data-handlepos="top" data-id="1-conn_paypal-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="text-sm truncate w-full">
                            {"paypal_eu"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate w-full">
                            {"Connection"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-resource selectable" data-id="check_charge_id" data-testid="rf__node-check_charge_id" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(336px, 360px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-32">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <IconTile className="[--icon-tile-icon-size:--spacing(5)] bg-card dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="lg">
                              <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </IconTile>
                            <div className="-top-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top source" data-handleid="out" data-nodeid="check_charge_id" data-handlepos="top" data-id="1-check_charge_id-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="text-sm truncate w-full">
                            {"unique_charge"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate w-full">
                            {"Test"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-resource selectable" data-id="model_ledger_v3" data-testid="rf__node-model_ledger_v3" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(608px, 204px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="data-dimmed:opacity-35 duration-200 flex flex-col gap-2 items-center motion-reduce:transition-none transition-opacity w-32">
                        <ContextMenu>
                        <ContextMenuTrigger className="block">
                          <div className="relative">
                            <IconTile className="[--icon-tile-icon-size:--spacing(5)] bg-card dark:bg-card dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50" variant="outline" size="lg">
                              <svg className="dark:hidden" viewBox="0 0 256 310" preserveAspectRatio="xMidYMid">
                                <path d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path>
                              </svg>
                              <svg className="dark:block hidden" viewBox="0 0 256 310" preserveAspectRatio="xMidYMid">
                                <path fill="#fff" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path>
                              </svg>
                            </IconTile>
                            <div className="-top-1! connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-top source" data-handleid="out" data-nodeid="model_ledger_v3" data-handlepos="top" data-id="1-model_ledger_v3-out-source"></div>
                          </div>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="flex flex-col items-center min-w-0 text-center w-full">
                          <span className="text-sm truncate w-full">
                            {"ledger_v3"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate w-full">
                            {"Model"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="react-flow__viewport-portal"></div>
                </div>
              </div>
            </div>
            <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <pattern id="pattern-1" x="17.92957746478873" y="-14" width="22.690140845070424" height="22.690140845070424" patternUnits="userSpaceOnUse" patterntransform="translate(-11.345070422535212,-11.345070422535212)">
                <circle className="dots react-flow__background-pattern" cx="0.9454225352112676" cy="0.9454225352112676" r="0.9454225352112676"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
            </svg>
            <div className="bottom left m-6! react-flow__panel">
              <Card className="flex-row gap-1 items-center p-1" size="sm" role="group" aria-label="Canvas controls">
                <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" size="sm" spacing="0.5" aria-label="Canvas tool" style={{"--gap": "0.5"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="default" size="sm" spacing="0.5" aria-label="Select" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MousePointer2Icon" tabler="IconPointer" hugeicons="Cursor01Icon" phosphor="CursorIcon" remixicon="RiCursorLine" aria-hidden="true">
                      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-sm cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="default" size="sm" spacing="0.5" aria-label="Pan" id="base-ui-_r_c_" baseUiTooltipTrigger="">
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
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 tabular-nums transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 95%" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                    {"95%"}
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Focus failed task" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </Card>
            </div>
            <div className="bottom center react-flow__attribution react-flow__panel" data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev?utm_source=attribution">
              <a href="https://reactflow.dev?utm_source=attribution" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
                {"React Flow"}
              </a>
            </div>
            <div id="react-flow__node-desc-1" style={{display: "none"}}>
              {"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel."}
            </div>
            <div id="react-flow__edge-desc-1" style={{display: "none"}}>
              {"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."}
            </div>
            <div id="react-flow__aria-live-1" aria-live="assertive" aria-atomic="true" style={{position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)"}}></div>
          </div>
        </div>
        <div className="absolute data-instant:transition-none duration-300 ease-in-out end-4 inset-y-4 motion-reduce:transition-none transition-[translate] translate-x-0 w-96 z-10" role="complementary" aria-label="Task details" aria-hidden="false" data-instant="true">
          <Card className="gap-0 h-full py-0" size="default">
            <header className="border-b flex gap-2 items-center px-4 py-2 shrink-0">
              <CardTitle className="flex flex-1 font-semibold gap-2 items-center min-w-0 text-sm">
                <span className="[&>svg]:size-4 flex items-center shrink-0">
                  <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                    <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                    <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                    <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                    <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                  </svg>
                </span>
                <span className="truncate">
                  {"publish_mrr"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="10" x2="10" y1="15" y2="9"></line>
                    <line x1="14" x2="14" y1="15" y2="9"></line>
                  </svg>
                  {"Waiting"}
                </Badge>
              </CardTitle>
              <Button className="-me-1.5" type="button" tabIndex="0" aria-label="Close task details">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </header>
            <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
              <TabsList className="border-b gap-5 h-auto justify-start px-4 py-0 shrink-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2b_" compositeItemActive="" aria-controls="base-ui-_r_2d_">
                  {"Settings"}
                </TabsTrigger>
                <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2c_">
                  {"Wiring"}
                </TabsTrigger>
              </TabsList>
              <div className="flex flex-1 flex-col min-h-0 overflow-y-auto p-4">
                <TabsContent className="flex flex-col" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_2d_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_2b_">
                  <FieldGroup className="flex-1">
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="task-title">
                        {"Title"}
                      </FieldLabel>
                      <Input id="task-title" value="publish_mrr"></Input>
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="task-glyph">
                        {"Service"}
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex="0" id="task-glyph" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="align-middle gap-2 inline-flex items-center">
                            <span className="[&>svg]:size-4 flex items-center shrink-0">
                              <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                                <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                                <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                                <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                                <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                              </svg>
                            </span>
                            {"Google Cloud"}
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_2f_-hidden-input" tabIndex="-1" aria-hidden="true" value="google" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="param-currency">
                        {"currency"}
                      </FieldLabel>
                      <Input id="param-currency" type="text" value="USD"></Input>
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="param-approver">
                        {"approver"}
                      </FieldLabel>
                      <Input id="param-approver" type="text" value="finance-lead"></Input>
                    </Field>
                    <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center mt-auto px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                      <svg className="lucide lucide-circle-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PauseCircleIcon" tabler="IconPlayerPauseFilled" hugeicons="PauseCircleIcon" phosphor="PauseCircleIcon" remixicon="RiPauseCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="10" x2="10" y1="15" y2="9"></line>
                        <line x1="14" x2="14" y1="15" y2="9"></line>
                      </svg>
                      <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                        {"Awaiting Approval"}
                      </AlertTitle>
                    </Alert>
                  </FieldGroup>
                </TabsContent>
              </div>
            </Tabs>
            <footer className="border-t p-4 shrink-0">
              <div className="gap-3 grid grid-cols-2 w-full">
                <Button type="button" tabIndex="0">
                  {"Cancel"}
                </Button>
                <Button type="button" disabled="" tabIndex="0" disabled>
                  {"Save task"}
                </Button>
              </div>
            </footer>
          </Card>
        </div>
      </div>
    </div>
  )
}
