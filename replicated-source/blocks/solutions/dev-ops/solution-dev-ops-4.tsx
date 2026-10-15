import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
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
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Firewall"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
          <div className="@container/firewall flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                    {"Firewall"}
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {"Enforcing"}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {"Edge rules, protections and live traffic"}
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex={0} extracted="1">
                  <svg className="lucide lucide-flask-conical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                    <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                    <path d="M6.453 15h11.094"></path>
                    <path d="M8.5 2h7"></path>
                  </svg>
                  {"Test Request"}
                </Button>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {"New Rule"}
                </Button>
              </div>
            </div>
            <div className="@4xl:grid-cols-3 gap-4 grid">
              <div className="@4xl:col-span-2 min-w-0">
                <Frame className="h-full w-full" spacing="default">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="font-semibold text-sm">
                        {"Traffic"}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {"Requests per hour, last 24 hours"}
                      </div>
                    </div>
                    <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Traffic shown" style={{"--gap": "0"}}>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0">
                        {"All"}
                      </ToggleGroupItem>
                      <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0">
                        {"Threats"}
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </header>
                  <FramePanel className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 sm:items-start sm:justify-between">
                      <div className="gap-4 grid grid-cols-3 min-w-0 sm:flex-1 sm:gap-6 sm:max-w-md">
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Requests"}
                          </span>
                          <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                            {"1.2M"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate">
                            {"Last 24 hours"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Blocked"}
                          </span>
                          <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                            {"79.8K"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate">
                            {"6.5% of requests"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-muted-foreground text-xs">
                            {"Challenged"}
                          </span>
                          <span className="font-semibold leading-none tabular-nums text-2xl text-foreground tracking-tight">
                            {"73.1K"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs truncate">
                            {"5.9% of requests"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center text-muted-foreground text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-destructive h-2 rounded-full w-3" aria-hidden="true"></span>
                          {"Blocked"}
                        </span>
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-warning h-2 rounded-full w-3" aria-hidden="true"></span>
                          {"Challenged"}
                        </span>
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-success/45 h-2 rounded-full w-3" aria-hidden="true"></span>
                          {"Allowed"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-h-0">
                      <div className="flex-1 gap-1 grid grid-cols-24 min-h-40 sm:gap-1.5" role="group" aria-label="Requests per hour">
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-0" type="button" tabIndex={-1} aria-label="15:00 to 16:00: 69,800 requests, 1,980 blocked, 1,420 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-1" type="button" tabIndex={-1} aria-label="16:00 to 17:00: 72,820 requests, 2,110 blocked, 1,510 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-2" type="button" tabIndex={-1} aria-label="17:00 to 18:00: 73,290 requests, 2,040 blocked, 9,350 challenged. Scraper wave on /v2/customers" aria-pressed="false">
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-3" type="button" tabIndex={-1} aria-label="18:00 to 19:00: 68,650 requests, 1,890 blocked, 4,960 challenged" aria-pressed="false">
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-4" type="button" tabIndex={-1} aria-label="19:00 to 20:00: 60,350 requests, 1,720 blocked, 1,330 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-5" type="button" tabIndex={-1} aria-label="20:00 to 21:00: 54,340 requests, 1,560 blocked, 1,180 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-6" type="button" tabIndex={-1} aria-label="21:00 to 22:00: 47,320 requests, 1,380 blocked, 1,040 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-7" type="button" tabIndex={-1} aria-label="22:00 to 23:00: 39,930 requests, 1,210 blocked, 920 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-8" type="button" tabIndex={-1} aria-label="23:00 to 00:00: 33,770 requests, 1,060 blocked, 810 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-9" type="button" tabIndex={-1} aria-label="00:00 to 01:00: 28,760 requests, 940 blocked, 720 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-10" type="button" tabIndex={-1} aria-label="01:00 to 02:00: 25,110 requests, 860 blocked, 650 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-11" type="button" tabIndex={-1} aria-label="02:00 to 03:00: 25,650 requests, 910 blocked, 2,840 challenged" aria-pressed="false">
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-12" type="button" tabIndex={-1} aria-label="03:00 to 04:00: 54,050 requests, 3,350 blocked, 30,400 challenged. Credential stuffing on /oauth/token" aria-pressed="false">
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="flex flex-1 items-center justify-center min-h-1.5 w-full" aria-hidden="true">
                            <span className="bg-destructive rounded-full size-1.5"></span>
                          </span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-13" type="button" tabIndex={-1} aria-label="04:00 to 05:00: 47,460 requests, 21,700 blocked, 3,960 challenged. 203.0.113.128/26 added to the blocklist" aria-pressed="false">
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-warning flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="flex flex-1 items-center justify-center min-h-1.5 w-full" aria-hidden="true">
                            <span className="bg-destructive rounded-full size-1.5"></span>
                          </span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-14" type="button" tabIndex={-1} aria-label="05:00 to 06:00: 29,160 requests, 2,640 blocked, 1,120 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-15" type="button" tabIndex={-1} aria-label="06:00 to 07:00: 33,200 requests, 1,130 blocked, 870 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-16" type="button" tabIndex={-1} aria-label="07:00 to 08:00: 42,290 requests, 1,370 blocked, 1,020 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-17" type="button" tabIndex={-1} aria-label="08:00 to 09:00: 51,130 requests, 1,640 blocked, 1,190 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-18" type="button" tabIndex={-1} aria-label="09:00 to 10:00: 72,210 requests, 16,800 blocked, 1,310 challenged. Scanner wave on dotfiles and CMS paths" aria-pressed="false">
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-19" type="button" tabIndex={-1} aria-label="10:00 to 11:00: 67,520 requests, 5,940 blocked, 1,380 challenged" aria-pressed="false">
                          <span className="bg-destructive flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-20" type="button" tabIndex={-1} aria-label="11:00 to 12:00: 67,710 requests, 2,160 blocked, 1,450 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-21" type="button" tabIndex={-1} aria-label="12:00 to 13:00: 71,090 requests, 2,270 blocked, 1,520 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none outline-none rounded-full transition-opacity" id="devops-4-hour-22" type="button" tabIndex={-1} aria-label="13:00 to 14:00: 74,860 requests, 2,380 blocked, 1,580 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                        <button className="cursor-pointer duration-150 flex flex-col-reverse focus-visible:ring-3 focus-visible:ring-ring/50 gap-1 group/hour min-w-0 motion-reduce:transition-none opacity-70 outline-none rounded-full transition-opacity" id="devops-4-hour-23" type="button" tabIndex={0} aria-label="14:00 to now: 23,380 requests, 760 blocked, 520 challenged" aria-pressed="false">
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-success/45 flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                          <span className="bg-muted flex-1 min-h-1.5 rounded-full w-full" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className="gap-1 grid grid-cols-24 sm:gap-1.5 text-muted-foreground text-xs" aria-hidden="true">
                        <span className="col-start-1 justify-self-start row-start-1 whitespace-nowrap">
                          {"24h ago"}
                        </span>
                        <span className="col-start-6 justify-self-center row-start-1 whitespace-nowrap">
                          {"18h"}
                        </span>
                        <span className="col-start-12 justify-self-center row-start-1 whitespace-nowrap">
                          {"12h"}
                        </span>
                        <span className="col-start-18 justify-self-center row-start-1 whitespace-nowrap">
                          {"6h"}
                        </span>
                        <span className="col-start-24 justify-self-end row-start-1 whitespace-nowrap">
                          {"Now"}
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <Frame className="h-full w-full" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      {"Protections"}
                    </div>
                    <div className="tabular-nums text-muted-foreground text-xs">
                      {"3 of 3 managed layers on"}
                    </div>
                  </div>
                </header>
                <FramePanel className="p-0">
                  <ItemGroup className="gap-0" role="list">
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Managed WAF"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Core attack rules, medium sensitivity"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_2_" aria-checked="true" size="default" aria-label="Managed WAF">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="devops-4-protection-waf" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                    <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"WAF Sensitivity"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Trades coverage for false hits"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Select>
                        <SelectTrigger className="w-28" type="button" tabIndex={0} id="devops-4-waf-level" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="WAF sensitivity">
                          <SelectValue>
                            {"Medium"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_5_-hidden-input" tabIndex={-1} aria-hidden="true" value="medium" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                    <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                            <path d="M12 8V4H8"></path>
                            <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                            <path d="M2 14h2"></path>
                            <path d="M20 14h2"></path>
                            <path d="M15 13v2"></path>
                            <path d="M9 13v2"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Bot Defense"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Challenge bot scores under 30"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_8_" aria-checked="true" size="default" aria-label="Bot defense">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="devops-4-protection-bots" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                    <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                            <line x1={10} x2={14} y1={2} y2={2}></line>
                            <line x1={12} x2={15} y1={14} y2={11}></line>
                            <circle cx={12} cy={14} r={8}></circle>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Rate Limiting"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Over 600 requests a minute per IP"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_b_" aria-checked="true" size="default" aria-label="Rate limiting">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="devops-4-protection-rateLimit" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                    <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Minimum TLS"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Older clients fail the handshake"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Select>
                        <SelectTrigger className="w-28" type="button" tabIndex={0} id="devops-4-tls" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Minimum TLS version">
                          <SelectValue>
                            {"TLS 1.2"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_e_-hidden-input" tabIndex={-1} aria-hidden="true" value="1.2" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                    <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    <Item className="px-(--frame-panel-px)" variant="default" size="sm">
                      <ItemMedia variant="default">
                        <IconTile variant="outline" size="sm" aria-hidden="true">
                          <svg className="lucide lucide-flame" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlameIcon" tabler="IconFlame" hugeicons="Fire02Icon" phosphor="FlameIcon" remixicon="RiFireLine" aria-hidden="true">
                            <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Under Attack Mode"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"Challenge every visitor until turned off"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_h_" aria-checked="false" size="default" aria-label="Under attack mode">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="devops-4-protection-attackMode" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </ItemActions>
                    </Item>
                  </ItemGroup>
                </FramePanel>
              </Frame>
            </div>
            <Frame className="w-full" spacing="default" id="devops-4-rules">
              <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-px min-w-0">
                  <div className="font-semibold text-sm">
                    {"Rules"}
                  </div>
                  <div className="tabular-nums text-muted-foreground text-xs">
                    {"10 of 12 on, first match wins"}
                  </div>
                </div>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-file-braces-corner" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileJson2Icon" tabler="IconJson" hugeicons="FileBracesCornerIcon" phosphor="FileJsIcon" remixicon="RiBracesLine" aria-hidden="true">
                    <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"></path>
                    <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"></path>
                  </svg>
                  <span className="max-sm:sr-only">
                    {"Export"}
                  </span>
                </Button>
              </header>
              <FramePanel className="p-0">
                <div className="relative">
                  <DataGridProvider>
                  <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_l_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                      <div role="presentation" style={{minWidth: "fit-content"}}>
                        <DataGridProvider>
                        <DataGridTableViewport>
                          <DataGridProvider>
                          <DataGridTable>
                            <colgroup>
                              <col style={{width: "40px"}} />
                              <col style={{width: "36px"}} />
                              <col style={{width: "44px"}} />
                              <col style={{width: "300px"}} />
                              <col style={{width: "124px"}} />
                              <col style={{width: "232px"}} />
                              <col style={{width: "128px"}} />
                              <col style={{width: "112px"}} />
                              <col style={{width: "64px"}} />
                              <col style={{width: "52px"}} />
                            </colgroup>
                            <thead>
                              <tr className="[&>th]:border-b bg-transparent">
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="drag" data-header-id="drag" data-header-depth="0" style={{width: "40px"}}>
                                  <span className="sr-only">
                                    {"Reorder"}
                                  </span>
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "36px"}}>
                                  <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_n_" aria-checked="false" aria-label="Select all"></Checkbox>
                                  <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="order" data-header-id="order" data-header-depth="0" style={{width: "44px"}}>
                                  {"#"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="rule" data-header-id="rule" data-header-depth="0" style={{width: "300px"}}>
                                  {"Rule"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="action" data-header-id="action" data-header-depth="0" style={{width: "124px"}}>
                                  {"Action"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="match" data-header-id="match" data-header-depth="0" style={{width: "232px"}}>
                                  {"Match"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="hits" data-header-id="hits" data-header-depth="0" style={{width: "128px"}}>
                                  {"Hits 24h"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="updated" data-header-id="updated" data-header-depth="0" style={{width: "112px"}}>
                                  {"Updated"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="enabled" data-header-id="enabled" data-header-depth="0" style={{width: "64px"}}>
                                  {"On"}
                                </th>
                                <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "52px"}}>
                                  <span className="sr-only">
                                    {"Actions"}
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <DataGridProvider>
                            <DataGridTableBody>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1001" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"1"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Allow health checks">
                                      {"Allow health checks"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1001"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Uptime probes skip every later check"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                      {"Allow"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Both conditions: http.path eq \"/healthz\" and http.user_agent starts_with \"HarborProbe\". Edit Allow health checks"} id="base-ui-_r_u_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "4350ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path eq \"/healthz\" and http.user_agent starts_with \"HarborProbe\""}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"17,280"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 21s ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"41d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_v_" aria-checked="true" size="default" aria-label="Enable Allow health checks">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_10_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Allow health checks" aria-haspopup="menu" id="devops-4-rule-menu-FW-1001" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1002" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_17_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"2"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Allow acquirer webhooks">
                                      {"Allow acquirer webhooks"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1002"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Settlement callbacks from the card acquirer"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                      </svg>
                                      {"Allow"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Both conditions: ip.src in 192.0.2.16/28 and edge.service in {\"webhook-dispatcher\"}. Edit Allow acquirer webhooks"} id="base-ui-_r_1b_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "3983ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"ip.src in 192.0.2.16/28 and edge.service in {\"webhook-dispatcher\"}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"4,813"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 15s ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"19d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_1c_" aria-checked="true" size="default" aria-label="Enable Allow acquirer webhooks">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_1d_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Allow acquirer webhooks" aria-haspopup="menu" id="devops-4-rule-menu-FW-1002" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1003" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_1k_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"3"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Block embargoed regions">
                                      {"Block embargoed regions"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1003"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Sanctions screening for every service"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"1 condition: ip.geo.country in {\"KP\" \"IR\" \"CU\" \"SY\"}. Edit Block embargoed regions"} id="base-ui-_r_1o_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "1500ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"ip.geo.country in {\"KP\" \"IR\" \"CU\" \"SY\"}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"214"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 6m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"88d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_1p_" aria-checked="true" size="default" aria-label="Enable Block embargoed regions">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_1q_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block embargoed regions" aria-haspopup="menu" id="devops-4-rule-menu-FW-1003" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1004" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_21_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"4"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Block scanner probes">
                                      {"Block scanner probes"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1004"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Dotfiles, CMS paths and attack tooling"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Any of 4 conditions: http.path starts_with \"/.\" or http.path contains \"wp-\" or http.user_agent contains \"sqlmap\" or http.user_agent contains \"Nikto\". Edit Block scanner probes"} id="base-ui-_r_25_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "9000ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path starts_with \"/.\" or http.path contains \"wp-\" or http.user_agent contains \"sqlmap\" or http.user_agent contains \"Nikto\""}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"14,907"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 12s ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"6d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_26_" aria-checked="true" size="default" aria-label="Enable Block scanner probes">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_27_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block scanner probes" aria-haspopup="menu" id="devops-4-rule-menu-FW-1004" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1005" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"5"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Block known scanners">
                                      {"Block known scanners"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1005"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Managed list, refreshed hourly"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label="1 condition: ip.list in {scanners}. Edit Block known scanners" id="base-ui-_r_2i_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "1500ms"}}>
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"ip.list in {scanners}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"3,128"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 2m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"30d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_2j_" aria-checked="true" size="default" aria-label="Enable Block known scanners">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_2k_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block known scanners" aria-haspopup="menu" id="devops-4-rule-menu-FW-1005" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1006" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2r_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"6"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Block Tor on payments">
                                      {"Block Tor on payments"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1006"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Anonymised checkout traffic"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Both conditions: ip.list in {tor} and edge.service in {\"payments-api\"}. Edit Block Tor on payments"} id="base-ui-_r_2v_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "2417ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"ip.list in {tor} and edge.service in {\"payments-api\"}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"1,906"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 3m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"12d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_30_" aria-checked="true" size="default" aria-label="Enable Block Tor on payments">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_31_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block Tor on payments" aria-haspopup="menu" id="devops-4-rule-menu-FW-1006" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1007" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_38_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"7"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Protect admin paths">
                                      {"Protect admin paths"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1007"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Only allowlisted ranges reach /admin"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"1 condition: http.path starts_with \"/admin\". Edit Protect admin paths"} id="base-ui-_r_3c_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "1500ms"}}>
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path starts_with \"/admin\""}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"388"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 9m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"54d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_3d_" aria-checked="true" size="default" aria-label="Enable Protect admin paths">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_3e_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Protect admin paths" aria-haspopup="menu" id="devops-4-rule-menu-FW-1007" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1008" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3l_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"8"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Challenge login bursts">
                                      {"Challenge login bursts"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1008"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Token requests faster than 60 a minute"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                      </svg>
                                      {"Challenge"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Both conditions: http.path eq \"/oauth/token\" and rate.per_minute gt 60. Edit Challenge login bursts"} id="base-ui-_r_3p_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "2417ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path eq \"/oauth/token\" and rate.per_minute gt 60"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"33,612"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 1m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"9h ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_3q_" aria-checked="true" size="default" aria-label="Enable Challenge login bursts">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_3r_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Challenge login bursts" aria-haspopup="menu" id="devops-4-rule-menu-FW-1008" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1009" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_42_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"9"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Challenge hosted checkouts">
                                      {"Challenge hosted checkouts"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1009"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Payments created from data centers"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                      </svg>
                                      {"Challenge"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"All 3 conditions: ip.list in {hosting} and http.path starts_with \"/v2/payments\" and http.method in {\"POST\"}. Edit Challenge hosted checkouts"} id="base-ui-_r_46_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "6750ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"ip.list in {hosting} and http.path starts_with \"/v2/payments\" and http.method in {\"POST\"}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"1,477"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 4m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"15d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_47_" aria-checked="true" size="default" aria-label="Enable Challenge hosted checkouts">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_48_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Challenge hosted checkouts" aria-haspopup="menu" id="devops-4-rule-menu-FW-1009" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1010" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4f_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="tabular-nums text-muted-foreground text-sm">
                                    {"10"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Log risky refunds">
                                      {"Log risky refunds"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1010"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Refunds from low trust clients"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                      {"Log"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"3 conditions in 2 parts: http.path starts_with \"/v2/refunds\" and (bot.score lt 50 or ip.geo.country not in {\"US\" \"GB\" \"DE\" \"NL\" \"FR\"}). Edit Log risky refunds"} id="base-ui-_r_4j_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "9000ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path starts_with \"/v2/refunds\" and (bot.score lt 50 or ip.geo.country not in {\"US\" \"GB\" \"DE\" \"NL\" \"FR\"})"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"96"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 11m ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"2d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_4k_" aria-checked="true" size="default" aria-label="Enable Log risky refunds">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_4l_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Log risky refunds" aria-haspopup="menu" id="devops-4-rule-menu-FW-1010" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1011" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4s_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="opacity-55 tabular-nums text-muted-foreground text-sm">
                                    {"11"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0 opacity-55">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Geo challenge payouts">
                                      {"Geo challenge payouts"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1011"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Payout edits outside core markets"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex opacity-55">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                      </svg>
                                      {"Challenge"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 opacity-55 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"Both conditions: http.path starts_with \"/v2/payouts\" and ip.geo.country not in {\"US\" \"GB\" \"DE\" \"NL\" \"FR\" \"SG\"}. Edit Geo challenge payouts"} id="base-ui-_r_50_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "7233ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.path starts_with \"/v2/payouts\" and ip.geo.country not in {\"US\" \"GB\" \"DE\" \"NL\" \"FR\" \"SG\"}"}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0 opacity-55">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"0"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Last hit 5d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 opacity-55 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"5d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_51_" aria-checked="false" size="default" aria-label="Enable Geo challenge payouts">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_52_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Geo challenge payouts" aria-haspopup="menu" id="devops-4-rule-menu-FW-1011" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                              <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 data-dragging:[&>td]:border-t hover:bg-muted/40" data-row-id="FW-1012" style={{zIndex: "0", position: "relative"}}>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Button className="active:cursor-grabbing cursor-grab hover:bg-transparent hover:opacity-100 opacity-70 size-7" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_m_">
                                      <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripHorizontalIcon" tabler="IconGripHorizontal" hugeicons="DragDropHorizontalIcon" phosphor="DotsSixIcon" remixicon="RiDraggable" aria-hidden="true">
                                        <circle cx={12} cy={9} r={1}></circle>
                                        <circle cx={19} cy={9} r={1}></circle>
                                        <circle cx={5} cy={9} r={1}></circle>
                                        <circle cx={12} cy={15} r={1}></circle>
                                        <circle cx={19} cy={15} r={1}></circle>
                                        <circle cx={5} cy={15} r={1}></circle>
                                      </svg>
                                    </Button>
                                  </div>
                                </td>
                                <td className="align-middle pe-0! px-2 py-1.5">
                                  <div className="flex">
                                    <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_59_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <span className="opacity-55 tabular-nums text-muted-foreground text-sm">
                                    {"12"}
                                  </span>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0 opacity-55">
                                    <button className="cursor-pointer font-medium hover:text-primary hover:underline max-w-full self-start text-foreground text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="Edit Block legacy SDK">
                                      {"Block legacy SDK"}
                                    </button>
                                    <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                      <span className="font-mono shrink-0">
                                        {"FW-1012"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="truncate">
                                        {"Node SDK 3.x reached end of life"}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex opacity-55">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={10}></circle>
                                        <path d="M4.929 4.929 19.07 19.071"></path>
                                      </svg>
                                      {"Block"}
                                    </Badge>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <HoverCard>
                                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono group/read min-w-0 opacity-55 outline-offset-2 text-foreground text-left text-xs w-full" type="button" aria-label={"1 condition: http.user_agent starts_with \"HarborSDK-node/3.\". Edit Block legacy SDK"} id="base-ui-_r_5d_">
                                    <span className="@container block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] flex-1 group-focus-visible/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/read:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--read-ms": "1700ms"}} data-overflowing="true">
                                      <span className="duration-150 ease-linear group-focus-visible/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-focus-visible/read:delay-300 group-focus-visible/read:duration-(--read-ms) group-hover/read:[transform:translateX(min(0px,calc(100cqw_-_100%)))] group-hover/read:delay-300 group-hover/read:duration-(--read-ms) inline-block max-w-none motion-reduce:transform-none motion-reduce:transition-none transition-transform whitespace-nowrap">
                                        {"http.user_agent starts_with \"HarborSDK-node/3.\""}
                                      </span>
                                    </span>
                                  </HoverCardTrigger>
                                  </HoverCard>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex flex-col gap-0.5 min-w-0 opacity-55">
                                    <span className="tabular-nums text-foreground text-sm">
                                      {"0"}
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      {"Never hit"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex gap-2 items-center min-w-0 opacity-55 tabular-nums text-muted-foreground text-xs">
                                    <Avatar className="size-5" size="sm">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"1d ago"}
                                    </span>
                                  </div>
                                </td>
                                <td className="align-middle px-2 py-1.5">
                                  <div className="flex">
                                    <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_5e_" aria-checked="false" size="default" aria-label="Enable Block legacy SDK">
                                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                    </Switch>
                                    <input id="base-ui-_r_5f_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </div>
                                </td>
                                <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                  <div className="flex">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Block legacy SDK" aria-haspopup="menu" id="devops-4-rule-menu-FW-1012" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx={12} cy={12} r={1}></circle>
                                        <circle cx={19} cy={12} r={1}></circle>
                                        <circle cx={5} cy={12} r={1}></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </tr>
                            </DataGridTableBody>
                            </DataGridProvider>
                          </DataGridTable>
                          </DataGridProvider>
                        </DataGridTableViewport>
                        </DataGridProvider>
                        <div id="_r_m_" style={{display: "none"}}>
                          {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
                        </div>
                        <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                      </div>
                    </div>
                  </DataGridScrollArea>
                  </DataGridProvider>
                </div>
              </FramePanel>
            </Frame>
            <div className="@4xl:grid-cols-3 gap-4 grid">
              <section className="@4xl:col-span-2 min-w-0 scroll-mt-4" aria-label="Firewall log">
                <Frame className="h-full w-full" spacing="default">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="font-semibold text-sm">
                        {"Firewall Log"}
                      </div>
                      <div className="tabular-nums text-muted-foreground text-xs">
                        {"118 requests the firewall acted on, newest first"}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center shrink-0">
                      <Button type="button" tabIndex={0} aria-pressed="true">
                        <span className="flex relative size-2" aria-hidden="true">
                          <span className="absolute animate-ping bg-success inset-0 motion-reduce:animate-none opacity-60 rounded-full"></span>
                          <span className="bg-success relative rounded-full size-2"></span>
                        </span>
                        {"Live"}
                      </Button>
                      <Button type="button" tabIndex={0} aria-label="Export log">
                        <svg className="lucide lucide-file-spreadsheet" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileSpreadsheetIcon" tabler="IconFileSpreadsheet" hugeicons="FileSpreadsheetIcon" phosphor="FileXlsIcon" remixicon="RiFileExcel2Line" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M8 13h2"></path>
                          <path d="M14 13h2"></path>
                          <path d="M8 17h2"></path>
                          <path d="M14 17h2"></path>
                        </svg>
                        <span className="max-sm:sr-only">
                          {"Export"}
                        </span>
                      </Button>
                    </div>
                  </header>
                  <FramePanel className="flex flex-col p-0">
                    <Tabs data-orientation="horizontal" activationDirection="none">
                      <TabsList className="border-b gap-5 h-10! justify-start no-scrollbar overflow-x-auto px-(--frame-panel-header-px) py-0! scroll-fade-x w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                        <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_5n_" compositeItemActive="">
                          {"All"}
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                            {"118"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5o_">
                          {"Blocked"}
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                            {"66"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5p_">
                          {"Challenged"}
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                            {"25"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5q_">
                          {"Allowed"}
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                            {"25"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5r_">
                          {"Logged"}
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                            {"2"}
                          </Badge>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <div className="flex flex-wrap gap-2 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <InputGroup className="flex-1 min-w-48 sm:max-w-64" role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx={11} cy={11} r={8}></circle>
                          </svg>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_5s_" placeholder="Search IP, path or ray ID..." aria-label="Search the log" value="" />
                      </InputGroup>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex-1 min-h-0">
                      <div className="relative">
                        <DataGridProvider>
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_5t_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridProvider>
                              <DataGridTableViewport>
                                <DataGridProvider>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "80px"}} />
                                    <col style={{width: "116px"}} />
                                    <col style={{width: "164px"}} />
                                    <col style={{width: "236px"}} />
                                    <col style={{width: "184px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="time" data-header-id="time" data-header-depth="0" style={{width: "80px"}}>
                                        {"Time"}
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="verdict" data-header-id="verdict" data-header-depth="0" style={{width: "116px"}}>
                                        {"Verdict"}
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="source" data-header-id="source" data-header-depth="0" style={{width: "164px"}}>
                                        {"Source"}
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="request" data-header-id="request" data-header-depth="0" style={{width: "236px"}}>
                                        {"Request"}
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="matched" data-header-id="matched" data-header-depth="0" style={{width: "184px"}}>
                                        {"Matched By"}
                                      </th>
                                    </tr>
                                  </thead>
                                  <DataGridProvider>
                                  <DataGridTableBody>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="0dc525b129e32c36">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:17"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 203.0.113.171, United States, open details" id="base-ui-_r_b3_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"203.0.113.171"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"US"}
                                              </span>
                                              <span className="sr-only">
                                                {"United States"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-0dc525b129e32c36" aria-label="Open POST /v2/payments">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"POST"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/v2/payments"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Blocklist, open trace" id="base-ui-_r_b7_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M4.929 4.929 19.07 19.071"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Blocklist"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="c721a1909096fd98">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:15"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          {"Allowed"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 198.51.100.23, United States, open details" id="base-ui-_r_at_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"198.51.100.23"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"US"}
                                              </span>
                                              <span className="sr-only">
                                                {"United States"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-c721a1909096fd98" aria-label="Open GET /admin/settings">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/admin/settings"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Allowlist, open trace" id="base-ui-_r_b1_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Allowlist"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dece607803dbd308">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:12"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          {"Allowed"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 198.51.100.20, United States, open details" id="base-ui-_r_an_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"198.51.100.20"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"US"}
                                              </span>
                                              <span className="sr-only">
                                                {"United States"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-dece607803dbd308" aria-label="Open GET /admin/audit">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/admin/audit"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Allowlist, open trace" id="base-ui-_r_ar_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Allowlist"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="61092afbfb9ea478">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:07"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 192.0.2.199, Vietnam, open details" id="base-ui-_r_ah_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"192.0.2.199"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/vn.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"VN"}
                                              </span>
                                              <span className="sr-only">
                                                {"Vietnam"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-61092afbfb9ea478" aria-label="Open GET /v2/payments">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/v2/payments"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Rate limiting, open trace" id="base-ui-_r_al_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                              <line x1={10} x2={14} y1={2} y2={2}></line>
                                              <line x1={12} x2={15} y1={14} y2={11}></line>
                                              <circle cx={12} cy={14} r={8}></circle>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Rate limiting"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="8c70234e25d3b613">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:05"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 203.0.113.12, Vietnam, open details" id="base-ui-_r_ab_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"203.0.113.12"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/vn.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"VN"}
                                              </span>
                                              <span className="sr-only">
                                                {"Vietnam"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-8c70234e25d3b613" aria-label="Open GET /.git/config">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/.git/config"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Block scanner probes, open trace" id="base-ui-_r_af_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M4.929 4.929 19.07 19.071"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Block scanner probes"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="ad0a22993aaaeb30">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:20:02"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          {"Allowed"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 192.0.2.17, Netherlands, open details" id="base-ui-_r_a5_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"192.0.2.17"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/nl.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"NL"}
                                              </span>
                                              <span className="sr-only">
                                                {"Netherlands"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-ad0a22993aaaeb30" aria-label="Open POST /hooks/inbound/acquirer">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"POST"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/hooks/inbound/acquirer"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Allow acquirer webhooks, open trace" id="base-ui-_r_a9_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Allow acquirer webhooks"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a17004c4f506913b">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:19:49"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 192.0.2.201, India, open details" id="base-ui-_r_5v_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"192.0.2.201"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/in.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"IN"}
                                              </span>
                                              <span className="sr-only">
                                                {"India"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-a17004c4f506913b" aria-label="Open GET /v2/customers?page=41">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/v2/customers?page=41"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Blocklist, open trace" id="base-ui-_r_63_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M4.929 4.929 19.07 19.071"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Blocklist"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="cb0cdab31430fa59">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:19:37"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 203.0.113.12, Vietnam, open details" id="base-ui-_r_65_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"203.0.113.12"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/vn.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"VN"}
                                              </span>
                                              <span className="sr-only">
                                                {"Vietnam"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-cb0cdab31430fa59" aria-label="Open GET /.env">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/.env"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Block scanner probes, open trace" id="base-ui-_r_69_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M4.929 4.929 19.07 19.071"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Block scanner probes"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1ae243ffa1326983">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:19:26"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M4.929 4.929 19.07 19.071"></path>
                                          </svg>
                                          {"Blocked"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 203.0.113.66, United States, open details" id="base-ui-_r_6b_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"203.0.113.66"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"US"}
                                              </span>
                                              <span className="sr-only">
                                                {"United States"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-1ae243ffa1326983" aria-label="Open POST /oauth/token">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"POST"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/oauth/token"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Blocklist, open trace" id="base-ui-_r_6f_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="M4.929 4.929 19.07 19.071"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Blocklist"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                    <tr className="[&:has([aria-current=true])]:bg-muted/50 [&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="c61f02e3128181f1">
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"14:18:51"}
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                          {"Allowed"}
                                        </Badge>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/source items-center max-w-full min-w-0 outline-offset-2 text-left" type="button" aria-label="Source 198.51.100.10, United States, open details" id="base-ui-_r_6h_">
                                          <span className="font-mono group-hover/source:underline min-w-0 text-foreground text-xs truncate underline-offset-4 w-28">
                                            {"198.51.100.10"}
                                          </span>
                                          <span className="shrink-0 text-muted-foreground">
                                            <span className="flex gap-1.5 items-center min-w-0">
                                              <img className="object-cover rounded-full shrink-0 size-4" alt="" width={16} height={16} loading="lazy" decoding="async" src="https://flagcdn.com/us.svg" />
                                              <span className="font-mono text-xs" aria-hidden="true">
                                                {"US"}
                                              </span>
                                              <span className="sr-only">
                                                {"United States"}
                                              </span>
                                            </span>
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-pointer flex focus-visible:outline-2 focus-visible:outline-ring/50 font-mono gap-2 group/request items-center max-w-full min-w-0 outline-offset-2 text-left text-xs" type="button" id="devops-4-log-open-c61f02e3128181f1" aria-label="Open GET /healthz">
                                          <span className="shrink-0 text-muted-foreground w-11">
                                            {"GET"}
                                          </span>
                                          <span className="group-hover/request:text-primary group-hover/request:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"/healthz"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                      <td className="align-middle first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5">
                                        <HoverCard>
                                        <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 group/matched items-center max-w-full min-w-0 outline-offset-2 text-left text-sm" type="button" aria-label="Matched by Allow health checks, open trace" id="base-ui-_r_6l_">
                                          <span className="[&_svg]:size-3.5 flex shrink-0 text-muted-foreground">
                                            <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                              <circle cx={12} cy={12} r={10}></circle>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                          </span>
                                          <span className="group-hover/matched:underline min-w-0 text-foreground truncate underline-offset-4">
                                            {"Allow health checks"}
                                          </span>
                                        </HoverCardTrigger>
                                        </HoverCard>
                                      </td>
                                    </tr>
                                  </DataGridTableBody>
                                  </DataGridProvider>
                                </DataGridTable>
                                </DataGridProvider>
                              </DataGridTableViewport>
                              </DataGridProvider>
                            </div>
                          </div>
                        </DataGridScrollArea>
                        </DataGridProvider>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <DataGridProvider>
                      <DataGridPagination>
                        <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                          <div className="text-muted-foreground text-sm">
                            {"Rows per page"}
                          </div>
                          <Select>
                          <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_7q_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                            <SelectValue>
                              {"10"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_7q_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            {"1 - 10 of 118 events"}
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
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 3">
                              {"3"}
                            </Button>
                            <Button className="p-0 text-sm" type="button" tabIndex={0} aria-label="Go to page 4">
                              {"..."}
                            </Button>
                            <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Go to page 12">
                              {"12"}
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
                    </footer>
                  </FramePanel>
                </Frame>
              </section>
              <Frame className="h-full w-full" spacing="default">
                <header className="flex flex-row flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px min-w-0">
                    <div className="font-semibold text-sm">
                      {"IP Lists"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {"Checked before any rule"}
                    </div>
                  </div>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_7v_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    {"Add"}
                  </PopoverTrigger>
                  </Popover>
                </header>
                <FramePanel className="@container/panel flex flex-col min-h-0 p-0">
                  <Tabs data-orientation="horizontal" activationDirection="none">
                    <TabsList className="@xs/panel:gap-5 border-b gap-2 h-10! justify-start no-scrollbar overflow-x-auto px-(--frame-panel-header-px) py-0! w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_80_" compositeItemActive="">
                        {"Block"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"10"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_81_">
                        {"Allow"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"6"}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger className="after:-bottom-px! flex-none gap-1.5 h-full! px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_82_">
                        {"Managed"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
                          {"3"}
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <div className="@4xl/firewall:flex-1 @4xl/firewall:min-h-119 @6xl/firewall:min-h-117 min-w-0 relative">
                    <div className="@4xl/firewall:absolute @4xl/firewall:inset-0 @4xl/firewall:overflow-y-auto no-scrollbar scroll-fade-y">
                      <ul className="divide-y flex flex-col" aria-label="Blocklist">
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"203.0.113.128/26"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"64 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Credential stuffing on token endpoint"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"2 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                  <line x1={10} x2={14} y1={2} y2={2}></line>
                                  <line x1={12} x2={15} y1={14} y2={11}></line>
                                  <circle cx={12} cy={14} r={8}></circle>
                                </svg>
                                {"6d left"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 2 requests in the log, 203.0.113.128/26" id="base-ui-_r_84_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 203.0.113.128/26" aria-haspopup="menu" id="devops-4-entry-menu-ip-01" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"203.0.113.66"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Card testing on checkout"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"2 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                {"No expiry"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 2 requests in the log, 203.0.113.66" id="base-ui-_r_8b_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 203.0.113.66" aria-haspopup="menu" id="devops-4-entry-menu-ip-02" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"192.0.2.201"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Scraping customer pages"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"5 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                  <line x1={10} x2={14} y1={2} y2={2}></line>
                                  <line x1={12} x2={15} y1={14} y2={11}></line>
                                  <circle cx={12} cy={14} r={8}></circle>
                                </svg>
                                {"2d left"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 5 requests in the log, 192.0.2.201" id="base-ui-_r_8i_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 192.0.2.201" aria-haspopup="menu" id="devops-4-entry-menu-ip-03" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"198.51.100.240/28"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"16 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Refund retry abuse"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"2 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                {"No expiry"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 2 requests in the log, 198.51.100.240/28" id="base-ui-_r_8p_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 198.51.100.240/28" aria-haspopup="menu" id="devops-4-entry-menu-ip-04" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"203.0.113.9"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Repeated 401s on payouts"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-muted-foreground">
                                {"No hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                  <line x1={10} x2={14} y1={2} y2={2}></line>
                                  <line x1={12} x2={15} y1={14} y2={11}></line>
                                  <circle cx={12} cy={14} r={8}></circle>
                                </svg>
                                {"1h left"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 203.0.113.9" aria-haspopup="menu" id="devops-4-entry-menu-ip-05" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"192.0.2.32/28"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"16 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Login brute force from a VPS range"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"4 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                  <line x1={10} x2={14} y1={2} y2={2}></line>
                                  <line x1={12} x2={15} y1={14} y2={11}></line>
                                  <circle cx={12} cy={14} r={8}></circle>
                                </svg>
                                {"20h left"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 4 requests in the log, 192.0.2.32/28" id="base-ui-_r_95_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 192.0.2.32/28" aria-haspopup="menu" id="devops-4-entry-menu-ip-09" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"198.51.100.160/28"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"16 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Promo code enumeration"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-muted-foreground">
                                {"No hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                {"No expiry"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 198.51.100.160/28" aria-haspopup="menu" id="devops-4-entry-menu-ip-10" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"203.0.113.112/28"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"16 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Webhook replay attempts"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-foreground">
                                {"3 hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                {"No expiry"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 aria-pressed:bg-muted cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:hidden pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-pressed="false" aria-label="Show 3 requests in the log, 203.0.113.112/28" id="base-ui-_r_9h_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line" aria-hidden="true">
                                <path d="M2 5h20"></path>
                                <path d="M6 12h12"></path>
                                <path d="M9 19h6"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 203.0.113.112/28" aria-haspopup="menu" id="devops-4-entry-menu-ip-11" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"192.0.2.208/28"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"16 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"Spam signups from one network"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-muted-foreground">
                                {"No hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-warning">
                                <svg className="lucide lucide-timer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                                  <line x1={10} x2={14} y1={2} y2={2}></line>
                                  <line x1={12} x2={15} y1={14} y2={11}></line>
                                  <circle cx={12} cy={14} r={8}></circle>
                                </svg>
                                {"39m left"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 192.0.2.208/28" aria-haspopup="menu" id="devops-4-entry-menu-ip-12" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                        <li className="group/row relative">
                          <Item className="items-start pointer-fine:group-hover/row:bg-muted/50 px-(--frame-panel-px) rounded-none" variant="default" size="xs">
                            <ItemMedia variant="default">
                              <IconTile className="text-destructive" variant="soft" size="sm" aria-hidden="true">
                                <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                  <circle cx={12} cy={12} r={10}></circle>
                                  <path d="M4.929 4.929 19.07 19.071"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="gap-0.5 min-w-0">
                              <ItemTitle className="flex-wrap gap-x-2 line-clamp-none max-w-full min-w-0">
                                <span className="font-mono shrink-0 text-xs">
                                  {"198.51.100.40/29"}
                                </span>
                                <span className="@sm/panel:inline font-normal hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"8 IPs"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="text-xs truncate">
                                {"API key stuffing on /v2/keys"}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="flex-col gap-0.5 items-end motion-reduce:transition-none pointer-fine:group-has-[:focus-visible]/row:opacity-0 pointer-fine:group-has-[[aria-expanded=true]]/row:opacity-0 pointer-fine:group-hover/row:opacity-0 tabular-nums text-xs transition-opacity">
                              <span className="text-muted-foreground">
                                {"No hits"}
                              </span>
                              <span className="[&_svg]:size-3 flex gap-1 items-center text-muted-foreground">
                                {"No expiry"}
                              </span>
                            </ItemActions>
                            <span className="hidden pointer-coarse:block shrink-0 w-8" aria-hidden="true"></span>
                          </Item>
                          <div className="-translate-y-1/2 absolute end-(--frame-panel-px) flex gap-1 items-center top-1/2">
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:opacity-100 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group-has-[:focus-visible]/row:opacity-100 group-hover/row:opacity-100 group/button inline-flex items-center justify-center motion-reduce:transition-none opacity-0 outline-none pointer-coarse:opacity-100 select-none shrink-0 transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for 198.51.100.40/29" aria-haspopup="menu" id="devops-4-entry-menu-ip-13" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
