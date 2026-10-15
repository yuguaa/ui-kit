import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh w-full">
      <header className="border-b gap-3 grid grid-cols-[minmax(0,1fr)_auto_1fr] h-12 items-center max-md:grid-cols-[minmax(0,1fr)_auto_auto] px-4 shrink-0">
        <div className="flex gap-2 items-center min-w-0">
          <Breadcrumb className="max-sm:hidden" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  Maps
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
            Repeat Order Growth
          </h1>
          <Separator className="data-vertical:self-center h-4 max-xl:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <p className="flex gap-1.5 items-center max-xl:sr-only min-w-0 text-muted-foreground text-xs">
            <span className="shrink-0 tabular-nums">
              3 initiatives, 6 metrics
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="min-w-0 tabular-nums truncate">
              5 correlations
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <Avatar className="size-4" size="default" aria-hidden="true">
              <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <span className="min-w-0 truncate">
              Ines Marchetti
            </span>
          </p>
        </div>
        <p className="sr-only" role="status">
          Past 7 days, 3 initiatives and 6 metrics
        </p>
        <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Period" style={{"--gap": "0"}}>
          <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center md:px-3 outline-none px-2 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="0">
            <span className="max-md:hidden">
              7 days
            </span>
            <span className="md:hidden">
              7d
            </span>
          </ToggleGroupItem>
          <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center md:px-3 outline-none px-2 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
            <span className="max-md:hidden">
              6 weeks
            </span>
            <span className="md:hidden">
              6w
            </span>
          </ToggleGroupItem>
          <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center md:px-3 outline-none px-2 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0">
            <span className="max-md:hidden">
              12 months
            </span>
            <span className="md:hidden">
              12m
            </span>
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="col-start-3 flex gap-2 items-center justify-end">
          <Popover>
          <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
          <Button className="sm:hidden" type="button" tabIndex="0" aria-label="Add metric">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </Button>
          <Button className="max-sm:hidden" type="button" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add metric
          </Button>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Map actions" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
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
        <div className="[--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:color-mix(in_oklab,var(--muted-foreground)_18%,transparent)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-controls-box-shadow:none] [--xy-controls-button-background-color-hover:var(--muted)] [--xy-controls-button-background-color:var(--card)] [--xy-controls-button-border-color:var(--border)] [--xy-controls-button-color-hover:var(--foreground)] [--xy-controls-button-color:var(--foreground)] [--xy-edge-label-background-color:var(--card)] [--xy-edge-label-color:var(--muted-foreground)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke-width:1.5] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-background flex-1 min-h-0 relative">
          <div className="light react-flow" data-testid="rf__wrapper" role="application" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
            <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(24px, 81px) scale(0.810606)"}}>
                  <div className="react-flow__edges">
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-drives selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="init_free_returns->m_checkout_rate" data-testid="rf__edge-init_free_returns->m_checkout_rate" aria-label="Edge from init_free_returns to m_checkout_rate" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="init_free_returns->m_checkout_rate" d="M255.98130841121497 53.663551401869164L275.98130841121497 53.663551401869164L304.0934579439253 53.663551401869164L304.0934579439253 53.663551401869164L332.2056074766355 53.663551401869164L352.2056074766355 53.663551401869164" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M255.98130841121497 53.663551401869164L275.98130841121497 53.663551401869164L304.0934579439253 53.663551401869164L304.0934579439253 53.663551401869164L332.2056074766355 53.663551401869164L352.2056074766355 53.663551401869164" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-drives selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="init_restock_sms->m_restock_optins" data-testid="rf__edge-init_restock_sms->m_restock_optins" aria-label="Edge from init_restock_sms to m_restock_optins" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="init_restock_sms->m_restock_optins" d="M255.98130841121497 223.90654205607478L275.98130841121497 223.90654205607478L304.0934579439253 223.90654205607478L304.0934579439253 223.90654205607478L332.2056074766355 223.90654205607478L352.2056074766355 223.90654205607478" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M255.98130841121497 223.90654205607478L275.98130841121497 223.90654205607478L304.0934579439253 223.90654205607478L304.0934579439253 223.90654205607478L332.2056074766355 223.90654205607478L352.2056074766355 223.90654205607478" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-drives selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="init_loyalty_email->m_discount_depth" data-testid="rf__edge-init_loyalty_email->m_discount_depth" aria-label="Edge from init_loyalty_email to m_discount_depth" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="init_loyalty_email->m_discount_depth" d="M255.98130841121497 392.9158878504673L275.98130841121497 392.9158878504673L304.0934579439253 392.9158878504673L304.0934579439253 392.9158878504673L332.2056074766355 392.9158878504673L352.2056074766355 392.9158878504673" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M255.98130841121497 392.9158878504673L275.98130841121497 392.9158878504673L304.0934579439253 392.9158878504673L304.0934579439253 392.9158878504673L332.2056074766355 392.9158878504673L352.2056074766355 392.9158878504673" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-moves selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="m_checkout_rate->m_repeat_orders" data-testid="rf__edge-m_checkout_rate->m_repeat_orders" aria-label="Edge from m_checkout_rate to m_repeat_orders" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="m_checkout_rate->m_repeat_orders" d="M607.5700934579439 53.663551401869164L627.5700934579439 53.663551401869164L 643.6822429906542,53.663551401869164Q 655.6822429906542,53.663551401869164 655.6822429906542,65.66355140186917L 655.6822429906542,213.14018691588785Q 655.6822429906542,225.14018691588785 667.6822429906542,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M607.5700934579439 53.663551401869164L627.5700934579439 53.663551401869164L 643.6822429906542,53.663551401869164Q 655.6822429906542,53.663551401869164 655.6822429906542,65.66355140186917L 655.6822429906542,213.14018691588785Q 655.6822429906542,225.14018691588785 667.6822429906542,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-moves selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="m_restock_optins->m_repeat_orders" data-testid="rf__edge-m_restock_optins->m_repeat_orders" aria-label="Edge from m_restock_optins to m_repeat_orders" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="m_restock_optins->m_repeat_orders" d="M607.5700934579439 223.90654205607478L627.5700934579439 223.90654205607478L 655.0654205607477,223.90654205607478Q 655.6822429906542,223.90654205607478 655.6822429906542,224.52336448598132L 655.6822429906542,224.52336448598132Q 655.6822429906542,225.14018691588785 656.2990654205607,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M607.5700934579439 223.90654205607478L627.5700934579439 223.90654205607478L 655.0654205607477,223.90654205607478Q 655.6822429906542,223.90654205607478 655.6822429906542,224.52336448598132L 655.6822429906542,224.52336448598132Q 655.6822429906542,225.14018691588785 656.2990654205607,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-moves selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="m_discount_depth->m_repeat_orders" data-testid="rf__edge-m_discount_depth->m_repeat_orders" aria-label="Edge from m_discount_depth to m_repeat_orders" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="m_discount_depth->m_repeat_orders" d="M607.5700934579439 392.9158878504673L627.5700934579439 392.9158878504673L 643.6822429906542,392.9158878504673Q 655.6822429906542,392.9158878504673 655.6822429906542,380.9158878504673L 655.6822429906542,237.14018691588785Q 655.6822429906542,225.14018691588785 667.6822429906542,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M607.5700934579439 392.9158878504673L627.5700934579439 392.9158878504673L 643.6822429906542,392.9158878504673Q 655.6822429906542,392.9158878504673 655.6822429906542,380.9158878504673L 655.6822429906542,237.14018691588785Q 655.6822429906542,225.14018691588785 667.6822429906542,225.14018691588785L683.7943925233645 225.14018691588785L703.7943925233645 225.14018691588785" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-moves selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="m_repeat_orders->k_repeat_rate" data-testid="rf__edge-m_repeat_orders->k_repeat_rate" aria-label="Edge from m_repeat_orders to k_repeat_rate" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="m_repeat_orders->k_repeat_rate" d="M960.392523364486 225.14018691588785L980.392523364486 225.14018691588785L 996.5046728971963,225.14018691588785Q 1008.5046728971963,225.14018691588785 1008.5046728971963,213.14018691588785L 1008.5046728971963,150.78504672897196Q 1008.5046728971963,138.78504672897196 1020.5046728971963,138.78504672897196L1036.6168224299065 138.78504672897196L1056.6168224299065 138.78504672897196" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M960.392523364486 225.14018691588785L980.392523364486 225.14018691588785L 996.5046728971963,225.14018691588785Q 1008.5046728971963,225.14018691588785 1008.5046728971963,213.14018691588785L 1008.5046728971963,150.78504672897196Q 1008.5046728971963,138.78504672897196 1020.5046728971963,138.78504672897196L1036.6168224299065 138.78504672897196L1056.6168224299065 138.78504672897196" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                    <svg style={{zIndex: "0"}}>
                      <g className="nopan react-flow__edge react-flow__edge-moves selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="m_repeat_orders->k_margin" data-testid="rf__edge-m_repeat_orders->k_margin" aria-label="Edge from m_repeat_orders to k_margin" aria-describedby="react-flow__edge-desc-1">
                        <path className="react-flow__edge-path" id="m_repeat_orders->k_margin" d="M960.392523364486 225.14018691588785L980.392523364486 225.14018691588785L 996.5046728971963,225.14018691588785Q 1008.5046728971963,225.14018691588785 1008.5046728971963,237.14018691588785L 1008.5046728971963,297.0280373831776Q 1008.5046728971963,309.0280373831776 1020.5046728971963,309.0280373831776L1036.6168224299065 309.0280373831776L1056.6168224299065 309.0280373831776" fill="none" style={{strokeWidth: "1.23364"}}></path>
                        <path className="react-flow__edge-interaction" d="M960.392523364486 225.14018691588785L980.392523364486 225.14018691588785L 996.5046728971963,225.14018691588785Q 1008.5046728971963,225.14018691588785 1008.5046728971963,237.14018691588785L 1008.5046728971963,297.0280373831776Q 1008.5046728971963,309.0280373831776 1020.5046728971963,309.0280373831776L1036.6168224299065 309.0280373831776L1056.6168224299065 309.0280373831776" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="react-flow__edgelabel-renderer">
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(655.682px, 138.785px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-card border border-border dark:bg-card disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        0.91
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(655.682px, 225.14px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-card border border-border dark:bg-card disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        0.88
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(655.682px, 309.028px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-card border border-border dark:bg-card disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive text-xs transition-shadow">
                        -0.58
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(1008.5px, 181.963px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-card border border-border dark:bg-card disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        0.97
                      </Badge>
                    </div>
                    <div className="absolute" style={{transform: "translate(-50%, -50%) translate(1008.5px, 267.084px)"}}>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-card border border-border dark:bg-card disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                        0.84
                      </Badge>
                    </div>
                  </div>
                  <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                    <div className="react-flow__node react-flow__node-initiative selectable" data-id="init_free_returns" data-testid="rf__node-init_free_returns" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 0px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListTodoIcon" tabler="IconChecklist" hugeicons="CheckListIcon" phosphor="ListChecksIcon" remixicon="RiTodoLine" aria-hidden="true">
                                  <path d="M13 5h8"></path>
                                  <path d="M13 12h8"></path>
                                  <path d="M13 19h8"></path>
                                  <path d="m3 17 2 2 4-4"></path>
                                  <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Free first returns
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Initiative
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold tabular-nums text-sm">
                                  62%
                                </span>
                                <Progress className="ms-auto shrink-0 w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" aria-valuetext="62%" role="progressbar" aria-label="62% done">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "62%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  In Progress
                                </Badge>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  GitHub Project
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="shrink-0 tabular-nums">
                                  3 open
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="init_free_returns" data-handlepos="right" data-id="1-init_free_returns-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-initiative selectable" data-id="init_restock_sms" data-testid="rf__node-init_restock_sms" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 170px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListTodoIcon" tabler="IconChecklist" hugeicons="CheckListIcon" phosphor="ListChecksIcon" remixicon="RiTodoLine" aria-hidden="true">
                                  <path d="M13 5h8"></path>
                                  <path d="M13 12h8"></path>
                                  <path d="M13 19h8"></path>
                                  <path d="m3 17 2 2 4-4"></path>
                                  <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  SMS restock alerts
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Initiative
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold tabular-nums text-sm">
                                  40%
                                </span>
                                <Progress className="ms-auto shrink-0 w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar" aria-label="40% done">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  To Do
                                </Badge>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Growth Team
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="shrink-0 tabular-nums">
                                  5 open
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="init_restock_sms" data-handlepos="right" data-id="1-init_restock_sms-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-initiative selectable" data-id="init_loyalty_email" data-testid="rf__node-init_loyalty_email" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 340px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListTodoIcon" tabler="IconChecklist" hugeicons="CheckListIcon" phosphor="ListChecksIcon" remixicon="RiTodoLine" aria-hidden="true">
                                  <path d="M13 5h8"></path>
                                  <path d="M13 12h8"></path>
                                  <path d="M13 19h8"></path>
                                  <path d="m3 17 2 2 4-4"></path>
                                  <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Loyalty upgrade email
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Initiative
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold tabular-nums text-sm">
                                  0%
                                </span>
                                <Progress className="ms-auto shrink-0 w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" aria-valuetext="0%" role="progressbar" aria-label="0% done">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "0%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  Blocked
                                </Badge>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Lifecycle Team
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="shrink-0 tabular-nums">
                                  4 open
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="init_loyalty_email" data-handlepos="right" data-id="1-init_loyalty_email-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="m_checkout_rate" data-testid="rf__node-m_checkout_rate" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(352px, 0px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Checkout completion
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Input
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-sm truncate">
                                  68.4%
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  +1.2%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Average
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="m_checkout_rate" data-handlepos="left" data-id="1-m_checkout_rate-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="m_checkout_rate" data-handlepos="right" data-id="1-m_checkout_rate-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="m_restock_optins" data-testid="rf__node-m_restock_optins" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(352px, 170px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Restock alert opt-ins
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Input
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-sm truncate">
                                  1,240
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  +3.1%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Sum
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="m_restock_optins" data-handlepos="left" data-id="1-m_restock_optins-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="m_restock_optins" data-handlepos="right" data-id="1-m_restock_optins-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="m_discount_depth" data-testid="rf__node-m_discount_depth" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(352px, 340px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Average discount depth
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  Input
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-sm truncate">
                                  14.2%
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  -0.8%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Average
                                </span>
                                <Progress className="ms-auto shrink-0 w-10" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-label="58% toward 12% by end of Q4">
                                  <ProgressTrack progressing="">
                                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                                  </ProgressTrack>
                                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                    x
                                  </span>
                                </Progress>
                                <span className="shrink-0 tabular-nums">
                                  58%
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="m_discount_depth" data-handlepos="left" data-id="1-m_discount_depth-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="m_discount_depth" data-handlepos="right" data-id="1-m_discount_depth-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="m_repeat_orders" data-testid="rf__node-m_repeat_orders" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(704px, 170px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <circle cx="12" cy="12" r="6"></circle>
                                  <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Weekly repeat orders
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  North Star
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-base truncate">
                                  3,912
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  +0.9%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Sum
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="m_repeat_orders" data-handlepos="left" data-id="1-m_repeat_orders-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="m_repeat_orders" data-handlepos="right" data-id="1-m_repeat_orders-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="k_repeat_rate" data-testid="rf__node-k_repeat_rate" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(1056px, 85px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Repeat purchase rate
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  KPI
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-sm truncate">
                                  36.4%
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  +0.6%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Average
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="k_repeat_rate" data-handlepos="left" data-id="1-k_repeat_rate-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="k_repeat_rate" data-handlepos="right" data-id="1-k_repeat_rate-out-source"></div>
                      </div>
                    </div>
                    <div className="react-flow__node react-flow__node-metric selectable" data-id="k_margin" data-testid="rf__node-k_margin" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(1056px, 255px)", pointerEvents: "all", visibility: "visible"}}>
                      <div className="relative">
                        <ContextMenu>
                        <ContextMenuTrigger>
                          <Frame className="[--frame-panel-header-px-adjust:--spacing(-1)] [--frame-panel-header-py-adjust:--spacing(-0.5)] [--frame-panel-px-adjust:--spacing(-1)] [--frame-panel-py-adjust:--spacing(-1.5)] bg-muted dark:data-selected:ring-primary/40 data-selected:ring-[3px] data-selected:ring-primary/25 in-[.react-flow__node:focus-visible]:ring-2 in-[.react-flow__node:focus-visible]:ring-ring/50 w-64" spacing="default">
                            <header className="flex flex-row gap-2.5 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-flag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                                </svg>
                              </IconTile>
                              <div className="flex flex-col min-w-0">
                                <div className="font-semibold leading-4 text-sm truncate">
                                  Contribution margin
                                </div>
                                <div className="leading-4 text-muted-foreground text-xs truncate">
                                  KPI
                                </div>
                              </div>
                            </header>
                            <FramePanel className="flex flex-col gap-1">
                              <div className="flex gap-2 items-center">
                                <span className="font-semibold min-w-0 tabular-nums text-sm truncate">
                                  $412K
                                </span>
                                <span className="ms-auto shrink-0 tabular-nums text-success text-xs">
                                  +1.4%
                                </span>
                              </div>
                              <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                <span className="truncate">
                                  Past 7 days
                                </span>
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="truncate">
                                  Sum
                                </span>
                              </div>
                            </FramePanel>
                          </Frame>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-left target" data-handleid="in" data-nodeid="k_margin" data-handlepos="left" data-id="1-k_margin-in-target"></div>
                        <div className="connectableend connectablestart nodrag nopan react-flow__handle react-flow__handle-right source" data-handleid="out" data-nodeid="k_margin" data-handlepos="right" data-id="1-k_margin-out-source"></div>
                      </div>
                    </div>
                  </div>
                  <div className="react-flow__viewport-portal"></div>
                </div>
              </div>
            </div>
            <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
              <pattern id="pattern-1" x="1.3030303030303045" y="1.5606060606060659" width="11.348484848484848" height="11.348484848484848" patternUnits="userSpaceOnUse" patterntransform="translate(-5.674242424242424,-5.674242424242424)">
                <circle className="dots react-flow__background-pattern" cx="0.8106060606060606" cy="0.8106060606060606" r="0.8106060606060606"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
            </svg>
            <div className="bottom left m-4! react-flow__panel">
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
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 tabular-nums transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 81%" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                    81%
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
                <div className="flex gap-0.5 items-center" role="group" aria-label="Map">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Focus north star" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Auto layout" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
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
        <div className="absolute data-instant:transition-none duration-300 ease-in-out end-4 inset-y-4 motion-reduce:transition-none transition-[translate] translate-x-0 w-96 z-10" role="complementary" aria-label="Card details" aria-hidden="false" data-instant="true">
          <Card className="gap-0 h-full py-0" size="default">
            <header className="border-b flex gap-2 items-center px-4 py-2 shrink-0">
              <CardTitle className="flex flex-1 font-semibold gap-2 items-center min-w-0 text-sm">
                <span className="[&>svg]:size-4 flex items-center shrink-0">
                  <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </span>
                <span className="truncate">
                  Weekly repeat orders
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  North Star
                </Badge>
              </CardTitle>
              <Button className="-me-1.5" type="button" tabIndex="0" aria-label="Close metric details">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </header>
            <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
              <TabsList className="border-b gap-5 h-auto justify-start px-4 py-0 shrink-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_24_" compositeItemActive="" aria-controls="base-ui-_r_26_">
                  Settings
                </TabsTrigger>
                <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_25_">
                  Links
                </TabsTrigger>
              </TabsList>
              <div className="flex flex-1 flex-col min-h-0 overflow-y-auto p-4">
                <TabsContent className="flex flex-col gap-4" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_26_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_24_">
                  <FieldGroup>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="card-title">
                        Title
                      </FieldLabel>
                      <Input id="card-title" value="Weekly repeat orders"></Input>
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-role">
                        Role
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" disabled="" tabIndex="-1" disabled id="metric-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          <span className="align-middle gap-2 inline-flex items-center">
                            <span className="[&>svg]:size-4 flex items-center shrink-0">
                              <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TargetIcon" tabler="IconTarget" hugeicons="Target01Icon" phosphor="TargetIcon" remixicon="RiFocus3Line" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="6"></circle>
                                <circle cx="12" cy="12" r="2"></circle>
                              </svg>
                            </span>
                            North Star
                          </span>
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_28_-hidden-input" disabled tabIndex="-1" aria-hidden="true" value="north_star" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldDescription>
                        Promote another metric to hand this role on.
                      </FieldDescription>
                    </Field>
                    <div className="gap-3 grid grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-aggregation">
                          Aggregation
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="metric-aggregation" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            Sum
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_2b_-hidden-input" tabIndex="-1" aria-hidden="true" value="sum" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-unit">
                          Unit
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" tabIndex="0" id="metric-unit" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            Count
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_2e_-hidden-input" tabIndex="-1" aria-hidden="true" value="count" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </div>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-direction">
                        Better when
                      </FieldLabel>
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex="0" id="metric-direction" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          Higher is better
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_2h_-hidden-input" tabIndex="-1" aria-hidden="true" value="up" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                    <div className="gap-x-2 gap-y-3 grid grid-cols-[minmax(0,1fr)_7.5rem_5.5rem] items-center" role="group" aria-label="Period values">
                      <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Period
                      </span>
                      <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Value
                      </span>
                      <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Change %
                      </span>
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-7d-value">
                        Past 7 days
                      </FieldLabel>
                      <Input className="tabular-nums" id="metric-7d-value" inputmode="decimal" type="number" value="3912"></Input>
                      <Input className="tabular-nums" id="base-ui-_r_2l_" inputmode="decimal" step="0.1" aria-label="Past 7 days change" type="number" value="0.9"></Input>
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-6w-value">
                        Past 6 weeks
                      </FieldLabel>
                      <Input className="tabular-nums" id="metric-6w-value" inputmode="decimal" type="number" value="22408"></Input>
                      <Input className="tabular-nums" id="base-ui-_r_2n_" inputmode="decimal" step="0.1" aria-label="Past 6 weeks change" type="number" value="2.6"></Input>
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-12m-value">
                        Past 12 months
                      </FieldLabel>
                      <Input className="tabular-nums" id="metric-12m-value" inputmode="decimal" type="number" value="168730"></Input>
                      <Input className="tabular-nums" id="base-ui-_r_2p_" inputmode="decimal" step="0.1" aria-label="Past 12 months change" type="number" value="31.8"></Input>
                    </div>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-goal">
                        Goal
                      </FieldLabel>
                      <Input id="metric-goal" placeholder="Leave empty for no goal" value=""></Input>
                    </Field>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="metric-goal-progress">
                        Goal progress %
                      </FieldLabel>
                      <Input className="tabular-nums" disabled="" id="metric-goal-progress" disabled inputmode="numeric" min="0" max="100" type="number" value="0"></Input>
                    </Field>
                  </FieldGroup>
                </TabsContent>
              </div>
            </Tabs>
            <footer className="border-t p-4 shrink-0">
              <div className="gap-3 grid grid-cols-2 w-full">
                <Button type="button" tabIndex="0">
                  Cancel
                </Button>
                <Button type="button" disabled="" tabIndex="0" disabled>
                  Save metric
                </Button>
              </div>
            </footer>
          </Card>
        </div>
      </div>
    </div>
  )
}
