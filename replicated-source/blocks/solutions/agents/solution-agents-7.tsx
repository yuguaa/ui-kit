import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/bases/base/ui/card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/registry/bases/base/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-start justify-center max-w-7xl min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Failed Run Sheet"}
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap gap-3 items-center justify-between w-full">
          <div className="min-w-0">
            <div className="min-w-0">
              <span className="align-middle font-semibold inline leading-tight text-foreground text-lg tracking-tight">
                {"Failed Runs"}
              </span>
              <span className="align-middle inline-flex ms-2.5">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                  {"6 failed"}
                </Badge>
              </span>
            </div>
            <div className="min-w-0 mt-0.5">
              <span className="inline text-muted-foreground text-sm">
                {"About 120 runs today across 6 agents"}
              </span>
            </div>
          </div>
          <Select>
          <SelectTrigger className="w-[180px]" type="button" tabIndex={0} id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Filter by agent" extracted="1">
            <svg className="lucide lucide-bot size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
              <path d="M12 8V4H8"></path>
              <rect width={16} height={12} x={4} y={8} rx={2}></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
            <SelectValue>
              {"All Agents"}
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              {"▼"}
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        </div>
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          <Card className="h-full" size="sm">
            <CardContent className="flex flex-col gap-3 h-full">
              <div className="flex gap-2.5 items-start justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-accent-foreground bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8.5" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <p className="font-medium text-sm">
                      {"Exposure"}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {"Refund risk"}
                    </p>
                  </div>
                </div>
                <Tooltip>
                <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Exposure info" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <p className="font-semibold leading-none tabular-nums text-xl tracking-tight">
                {"$496.50"}
              </p>
              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0 mt-auto" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="99" aria-valuetext="99%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                  {"Exposure readiness"}
                </ProgressLabel>
                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                  {"99%"}
                </ProgressValue>
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "99%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
            </CardContent>
          </Card>
          <Card className="h-full" size="sm">
            <CardContent className="flex flex-col gap-3 h-full">
              <div className="flex gap-2.5 items-start justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-accent-foreground bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8.5" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <p className="font-medium text-sm">
                      {"Backoff"}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {"Provider errors"}
                    </p>
                  </div>
                </div>
                <Tooltip>
                <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Backoff info" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <p className="font-semibold leading-none tabular-nums text-xl tracking-tight">
                {"5"}
              </p>
              <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0 mt-auto" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="63" aria-valuetext="63%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                  {"Backoff readiness"}
                </ProgressLabel>
                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                  {"63%"}
                </ProgressValue>
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "63%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
            </CardContent>
          </Card>
          <Card className="h-full" size="sm">
            <CardContent className="flex flex-col gap-3 h-full">
              <div className="flex gap-2.5 items-start justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-accent-foreground bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8.5" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <p className="font-medium text-sm">
                      {"Owners"}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {"Assigned"}
                    </p>
                  </div>
                </div>
                <Tooltip>
                <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Owners info" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <p className="font-semibold leading-none tabular-nums text-xl tracking-tight">
                {"6"}
              </p>
              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0 mt-auto" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" aria-valuetext="75%" role="progressbar" aria-labelledby="base-ui-_r_b_">
                <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_b_" role="presentation">
                  {"Owners readiness"}
                </ProgressLabel>
                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                  {"75%"}
                </ProgressValue>
                <ProgressTrack progressing="">
                  <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "75%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
            </CardContent>
          </Card>
          <Card className="h-full" size="sm">
            <CardContent className="flex flex-col gap-3 h-full">
              <div className="flex gap-2.5 items-start justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Item className="[&_svg]:size-4.5 [&_svg]:text-accent-foreground bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-8.5" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                        <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="min-w-0">
                    <p className="font-medium text-sm">
                      {"Payload"}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {"Replay ready"}
                    </p>
                  </div>
                </div>
                <Tooltip>
                <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Payload info" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <p className="font-semibold leading-none tabular-nums text-xl tracking-tight">
                {"2"}
              </p>
              <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0 mt-auto" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_e_">
                <ProgressLabel className="sr-only" complete="" id="base-ui-_r_e_" role="presentation">
                  {"Payload readiness"}
                </ProgressLabel>
                <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" complete="" aria-hidden="true">
                  {"100%"}
                </ProgressValue>
                <ProgressTrack complete="">
                  <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                </ProgressTrack>
                <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                  {"x"}
                </span>
              </Progress>
            </CardContent>
          </Card>
        </div>
        <Card className="gap-0 p-0 w-full" size="default">
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2 items-center justify-between px-5 py-3.5">
              <div className="flex flex-wrap gap-2 items-center">
                <Select>
                <SelectTrigger className="w-[150px]" type="button" tabIndex={0} id="base-ui-_r_g_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by run status">
                  <SelectValue>
                    {"All Statuses"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_g_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <Select>
                <SelectTrigger className="w-[146px]" type="button" tabIndex={0} id="base-ui-_r_j_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by error type">
                  <SelectValue>
                    {"All Errors"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_j_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <InputGroup className="min-w-52 sm:w-[240px]" role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx={11} cy={11} r={8}></circle>
                    </svg>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_m_" placeholder="Search runs" aria-label="Search runs" value="" />
                </InputGroup>
              </div>
              <div className="flex gap-2 items-center">
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_o_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx={17} cy={17} r={3}></circle>
                    <circle cx={7} cy={7} r={3}></circle>
                  </svg>
                  {"View Settings"}
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <DataGrid>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_p_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "50px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                    <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                      <DataGridProvider>
                      <DataGridTableViewport style={{width: "calc(1266px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px", "--data-grid-fill": "0"}}>
                        <DataGridProvider>
                        <DataGridTable style={{"--header-run-size": "280", "--col-run-size": "280", "--header-status-size": "124", "--col-status-size": "124", "--header-agent-size": "158", "--col-agent-size": "158", "--header-owner-size": "184", "--col-owner-size": "184", "--header-errorCode-size": "158", "--col-errorCode-size": "158", "--header-failedStep-size": "210", "--col-failedStep-size": "210", "--header-lastAttempt-size": "152", "--col-lastAttempt-size": "152", width: "calc(1266px + var(--data-grid-fill-size, 0px))"}}>
                          <colgroup>
                            <col style={{width: "calc(var(--col-run-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-agent-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-errorCode-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-failedStep-size) * 1px)"}} />
                            <col style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}} />
                            <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                          </colgroup>
                          <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-5! px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="run" data-header-id="run" data-header-depth="0" style={{width: "calc(var(--header-run-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Run"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Status"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="agent" data-header-id="agent" data-header-depth="0" style={{width: "calc(var(--header-agent-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Agent"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Owner"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="errorCode" data-header-id="errorCode" data-header-depth="0" style={{width: "calc(var(--header-errorCode-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Error"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="failedStep" data-header-id="failedStep" data-header-depth="0" style={{width: "calc(var(--header-failedStep-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Failed Step"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible pe-5! pe-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastAttempt" data-header-id="lastAttempt" data-header-depth="0" style={{width: "calc(var(--header-lastAttempt-size) * 1px)"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex={0}>
                                    {"Last Attempt"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                                <span className="absolute before:hidden cursor-col-resize end-0 flex h-full justify-end select-none top-0 touch-none w-5 z-10"></span>
                              </th>
                              <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4822">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund partial return on ORD-99102 for Acme Corp"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4822"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Failed"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Refund Resolver"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Maya Perez"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Operations lead"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"402 card_declined"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="67% of steps complete">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={18.66106036232337} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"stripe.refunds.create"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 4 of 6"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"09:46 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4819">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Send weekly digest to 1,847 subscribers"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4819"}
                                    </span>
                                    <span>
                                      {"Retrying"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                  <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Retrying"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Outreach Composer"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Lara Chen" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Lara Chen"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Support automation"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"429 rate_limited"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="60% of steps complete">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={22.61946710584651} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"sendgrid.mail.send"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 3 of 5"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"09:34 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4815">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Match 42 open invoices for Globex"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4815"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Failed"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Invoice Reconciler"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Noa Kim" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Noa Kim"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Reliability engineer"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"502 bad_gateway"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="50% of steps complete">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={28.274333882308138} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"stripe.charges.list"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 2 of 4"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"09:21 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4811">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Sync 380 account records to the warehouse"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4811"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Failed"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Data Steward"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Emil Novak" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Emil Novak"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Platform engineer"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"504 query_timeout"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="50% of steps complete">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={28.274333882308138} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"postgres.query"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 2 of 4"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"09:02 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4808">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Enrich 214 new leads from the May webinar"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4808"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Failed"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Lead Enricher"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarImage alt="Pavel Singh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Pavel Singh"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Growth engineer"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"422 schema_invalid"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="50% of steps complete">
                                  <svg className="shrink-0 size-5 text-amber-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={28.274333882308138} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"pinecone.search"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 3 of 6"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"08:11 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:align-top cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="run-4806">
                              <td className="align-middle ps-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-run-size) * 1px)"}}>
                                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                  <button className="cursor-pointer font-medium group/run-title inline-flex items-center leading-5 max-w-full min-w-0 text-foreground text-left text-sm transition-colors" type="button">
                                    <span className="group-hover/run-title:text-primary min-w-0 py-0.25 text-foreground transition-colors truncate">
                                      {"Refund duplicate charge on ORD-99214 for Globex"}
                                    </span>
                                    <span className="inline-flex items-center justify-center ms-1 shrink-0 size-3" aria-hidden="true">
                                      <svg className="duration-200 ease-out group-focus-visible/run-title:opacity-100 group-hover/run-title:opacity-100 lucide lucide-arrow-right motion-reduce:transition-none opacity-0 pointer-events-none size-3 transition-opacity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </span>
                                  </button>
                                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                                    <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span>
                                      {"RUN-4806"}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative shrink style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  <span className="truncate">
                                    {"Failed"}
                                  </span>
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-agent-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  {"Refund Resolver"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0">
                                  <Avatar className="size-7" size="default">
                                    <AvatarFallback>
                                      {"JR"}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-sm truncate">
                                      {"Jonas Reed"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Safety reviewer"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-errorCode-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"429 rate_limited"}
                                </Badge>
                              </td>
                              <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-failedStep-size) * 1px)"}}>
                                <div className="flex gap-2 items-center min-w-0" aria-label="33% of steps complete">
                                  <svg className="shrink-0 size-5 text-sky-500" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5}></circle>
                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={37.8876074022929} transform="rotate(-90 12 12)"></circle>
                                  </svg>
                                  <div className="min-w-0">
                                    <div className="text-foreground text-xs truncate">
                                      {"orders.lookup"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"step 2 of 6"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle pe-5! px-2 py-1.5 truncate" style={{width: "calc(var(--col-lastAttempt-size) * 1px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <svg className="lucide lucide-calendar-clock size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                                    <path d="M16 14v2.2l1.6 1"></path>
                                    <path d="M16 2v4"></path>
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                    <path d="M3 10h5"></path>
                                    <path d="M8 2v4"></path>
                                    <circle cx={16} cy={16} r={6}></circle>
                                  </svg>
                                  <span className="tabular-nums">
                                    {"07:24 today"}
                                  </span>
                                </Badge>
                              </td>
                              <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                            </tr>
                          </DataGridTableBody>
                          </DataGridProvider>
                        </DataGridTable>
                        </DataGridProvider>
                      </DataGridTableViewport>
                      </DataGridProvider>
                    </div>
                  </div>
                  <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[var(--data-grid-scrollbar-size,0.625rem)] data-[orientation=horizontal]:mb-px data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:me-px data-[orientation=vertical]:w-[var(--data-grid-scrollbar-size,0.625rem)] flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_p_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "1166.0537124802527px"}}>
                    <div className="before:-inset-0.5 before:absolute bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </DataGridScrollArea>
                </DataGridProvider>
              </div>
            </DataGrid>
          </CardContent>
          <CardFooter className="border-t px-5 py-2.5">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_q_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"6"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_q_-hidden-input" tabIndex={-1} aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 6 of 8"}
                </div>
                <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex={0} disabled>
                    <span className="sr-only">
                      {"Go to previous page"}
                    </span>
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 1" aria-current="page">
                    {"1"}
                  </Button>
                  <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 2">
                    {"2"}
                  </Button>
                  <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex={0}>
                    <span className="sr-only">
                      {"Go to next page"}
                    </span>
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </DataGridPagination>
            </DataGridProvider>
          </CardFooter>
        </Card>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(30rem,calc(100vw-2rem))] z-[60]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_t_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_v_" aria-describedby="base-ui-_r_10_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="border-b flex gap-2 items-center justify-between min-h-11 px-5">
          <SheetTitle className="font-medium gap-2 inline-flex items-center text-sm truncate" id="base-ui-_r_v_">
            <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
            {"Failed Run"}
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close failed run detail">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="sr-only" id="base-ui-_r_10_">
          {"Inspect the failed run, read its error, review the retry attempts and input payload, then retry or dismiss it."}
        </SheetDescription>
        <div className="flex flex-col gap-2.5 min-w-0 px-5 py-4">
          <div className="flex gap-2 items-center min-w-0">
            <h2 className="flex-1 font-mono font-semibold min-w-0 text-foreground text-lg tracking-tight truncate">
              {"RUN-4822"}
            </h2>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
              {"Failed"}
            </Badge>
          </div>
          <p className="flex-wrap gap-x-1.5 gap-y-0.5 inline-flex items-center text-muted-foreground text-xs">
            <span>
              {"Refund Resolver"}
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              {"Failed 12m ago"}
            </span>
          </p>
        </div>
      </SheetHeader>
      <Tabs className="flex-1 flex-col min-h-0" data-orientation="horizontal" activationDirection="none">
        <div className="border-b px-5 shrink-0">
          <TabsList className="-mb-px gap-5 h-10 p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
            <TabsTrigger className="font-medium group-data-horizontal/tabs:after:-bottom-px! h-10 px-0 py-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_11_" compositeItemActive="" aria-controls="base-ui-_r_15_">
              {"Error"}
            </TabsTrigger>
            <TabsTrigger className="font-medium group-data-horizontal/tabs:after:-bottom-px! h-10 px-0 py-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_12_">
              {"Attempts"}
            </TabsTrigger>
            <TabsTrigger className="font-medium group-data-horizontal/tabs:after:-bottom-px! h-10 px-0 py-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_13_">
              {"Payload"}
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_14_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_15_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_11_">
                <div className="flex flex-col gap-5 px-5 py-5">
                  <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                    <svg className="lucide lucide-circle-alert size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <line x1={12} x2={12} y1={8} y2={12}></line>
                      <line x1={12} x2={12.01} y1={16} y2={16}></line>
                    </svg>
                    <AlertTitle className="col-start-2 font-medium font-mono line-clamp-1 min-h-4 tracking-tight">
                      {"402 card_declined"}
                    </AlertTitle>
                    <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                      <p>
                        {"Stripe declined the $312.50 refund on ORD-99102: the card ending 4242 expired 04/26."}
                      </p>
                    </AlertDescription>
                  </Alert>
                  <dl className="gap-x-4 gap-y-3 grid grid-cols-[7rem_1fr]">
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Task"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        {"Refund partial return on ORD-99102 for Acme Corp"}
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Agent"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        {"Refund Resolver"}
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Failed Step"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        <span className="flex-wrap gap-x-2 inline-flex items-baseline">
                          <span className="font-mono text-foreground text-xs">
                            {"stripe.refunds.create"}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {"step 4 of 6"}
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Attempts"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        <span className="tabular-nums">
                          {"3"}
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Last Attempt"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        {"09:46 today"}
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground text-sm">
                        {"Owner"}
                      </dt>
                      <dd className="min-w-0 text-foreground text-sm">
                        <span className="gap-2 inline-flex items-center">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Maya Perez" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          {"Maya Perez"}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </div>
      </Tabs>
      <SheetFooter className="bg-muted/40 border-t flex-row flex-wrap gap-2 items-center justify-end px-5 py-3 shrink-0">
        <Button type="button" tabIndex={0}>
          <svg className="lucide lucide-circle-x size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
            <circle cx={12} cy={12} r={10}></circle>
            <path d="m15 9-6 6"></path>
            <path d="m9 9 6 6"></path>
          </svg>
          {"Dismiss"}
        </Button>
        <Button type="button" tabIndex={0}>
          <svg className="lucide lucide-rotate-ccw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RotateCcwIcon" tabler="IconRefresh" hugeicons="UndoIcon" phosphor="ArrowCounterClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          {"Retry Run"}
        </Button>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
