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
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="@container flex flex-col gap-4 max-w-7xl min-h-svh mx-auto p-6 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Segment Builder"}
      </h1>
      <header className="bg-background flex gap-2 h-12 items-center justify-between shrink-0 w-full">
        <div className="flex gap-3 items-center min-w-0">
          <div className="flex gap-2 items-center shrink-0">
            <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </ItemMedia>
            </Item>
            <span className="font-semibold hidden sm:inline text-sm">
              {"Aster Insights"}
            </span>
          </div>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="flex items-center md:gap-1.5" href="#">
                  <svg className="shrink-0 size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2.5 2.75 5.25 8 8l5.25-2.75L8 2.5ZM3 8l5 2.6L13 8M3 10.75l5 2.75 5-2.75" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="hidden md:block">
                    {"Aster Cloud"}
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                {"/"}
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"Segment Builder"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
              <circle cx={18} cy={5} r={3}></circle>
              <circle cx={6} cy={12} r={3}></circle>
              <circle cx={18} cy={19} r={3}></circle>
              <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
              <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
            </svg>
            <span className="hidden sm:inline">
              {"Share"}
            </span>
          </Button>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
            <span className="hidden sm:inline">
              {"Build"}
            </span>
          </Button>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
            <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
              <path d="M15 6a9 9 0 0 0-9 9V3"></path>
              <circle cx={18} cy={6} r={3}></circle>
              <circle cx={6} cy={18} r={3}></circle>
            </svg>
            <span className="hidden md:inline">
              {"SEG-307-activation"}
            </span>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <Frame className="w-full">
        <FramePanel>
          <div className="flex flex-col gap-4 pb-1 pt-1 px-1.5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-1 mb-5 min-w-0">
              <h2 className="font-medium text-sm">
                {"Segment Health"}
              </h2>
              <p className="text-muted-foreground text-xs">
                {"486k matches · 12 conflicts"}
              </p>
            </div>
            <Tabs className="shrink-0 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none">
              <TabsList className="grid grid-cols-3 h-9 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_5_" compositeItemActive="">
                  {"Week"}
                </TabsTrigger>
                <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_6_">
                  {"Month"}
                </TabsTrigger>
                <TabsTrigger className="sm:min-w-16 text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_7_">
                  {"Year"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="grid items-stretch lg:grid-cols-4 sm:grid-cols-2">
            <div className="border-border/70 flex h-full min-h-0 min-w-0 pe-5 py-0 w-full">
              <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5">
                <div className="flex gap-2 items-center mb-2 min-w-0">
                  <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                  <span className="text-xs whitespace-nowrap">
                    {"Matched"}
                  </span>
                </div>
                <div className="flex gap-0 items-stretch min-h-0">
                  <div className="flex flex-1 flex-col gap-1 justify-center min-w-0 pr-5">
                    <span className="font-semibold text-xl">
                      {"486k"}
                    </span>
                    <span className="gap-1 inline-flex items-center text-muted-foreground text-xs whitespace-nowrap">
                      <span className="font-medium text-success">
                        {"+7.0%"}
                      </span>
                      <span>
                        {"Ready"}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-end justify-center pt-2 shrink-0">
                    <svg className="animate-in aspect-auto duration-300 ease-out fade-in h-12 motion-reduce:animate-none opacity-75 shrink-0 w-24" viewBox="0 0 92 48" aria-hidden="true">
                      <path d="M0,44 L18,19.217391304347824 L36,29.130434782608695 L54,30.782608695652172 L72,6 L90,42.34782608695652" fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-border/70 border-t flex h-full min-h-0 min-w-0 pe-5 py-0 sm:border-t-0 w-full">
              <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
              <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-5">
                <div className="flex gap-2 items-center mb-2 min-w-0">
                  <svg className="lucide lucide-circle-x shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleXIcon" tabler="IconCircleX" hugeicons="CancelCircleIcon" phosphor="XCircleIcon" remixicon="RiCloseCircleLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                  <span className="text-xs whitespace-nowrap">
                    {"Conflicts"}
                  </span>
                </div>
                <div className="flex gap-0 items-stretch min-h-0">
                  <div className="flex flex-1 flex-col gap-1 justify-center min-w-0 pr-5">
                    <span className="font-semibold text-xl">
                      {"12"}
                    </span>
                    <span className="gap-1 inline-flex items-center text-muted-foreground text-xs whitespace-nowrap">
                      <span className="font-medium text-destructive">
                        {"-4.2%"}
                      </span>
                      <span>
                        {"Fewer"}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-end justify-center pt-2 shrink-0">
                    <svg className="animate-in aspect-auto duration-300 ease-out fade-in h-12 motion-reduce:animate-none opacity-75 shrink-0 w-24" viewBox="0 0 92 48" aria-hidden="true">
                      <path d="M0,13.599999999999998 L18,21.2 L36,6 L54,28.799999999999997 L72,36.4 L90,44" fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-border/70 border-t flex h-full lg:border-t-0 min-h-0 min-w-0 pe-5 py-0 sm:border-t w-full">
              <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
              <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-5">
                <div className="flex gap-2 items-center mb-2 min-w-0">
                  <svg className="lucide lucide-truck shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx={17} cy={18} r={2}></circle>
                    <circle cx={7} cy={18} r={2}></circle>
                  </svg>
                  <span className="text-xs whitespace-nowrap">
                    {"Cohorts"}
                  </span>
                </div>
                <div className="flex gap-0 items-stretch min-h-0">
                  <div className="flex flex-1 flex-col gap-1 justify-center min-w-0 pr-5">
                    <span className="font-semibold text-xl">
                      {"8"}
                    </span>
                    <span className="gap-1 inline-flex items-center text-muted-foreground text-xs whitespace-nowrap">
                      <span className="font-medium text-success">
                        {"+2"}
                      </span>
                      <span>
                        {"Synced"}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-end justify-center pt-2 shrink-0">
                    <svg className="animate-in aspect-auto duration-300 ease-out fade-in h-12 motion-reduce:animate-none opacity-75 shrink-0 w-24" viewBox="0 0 92 48" aria-hidden="true">
                      <path d="M0,44 L18,18.666666666666668 L36,31.333333333333336 L54,18.666666666666668 L72,18.666666666666668 L90,6" fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-border/70 border-t flex h-full lg:border-t-0 min-h-0 min-w-0 pr-2 py-0 sm:border-t w-full">
              <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
              <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-5">
                <div className="flex gap-2 items-center mb-2 min-w-0">
                  <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span className="text-xs whitespace-nowrap">
                    {"Alerts"}
                  </span>
                </div>
                <div className="flex gap-0 items-stretch min-h-0">
                  <div className="flex flex-1 flex-col gap-1 justify-center min-w-0 pr-5">
                    <span className="font-semibold text-xl">
                      {"3"}
                    </span>
                    <span className="gap-1 inline-flex items-center text-muted-foreground text-xs whitespace-nowrap">
                      <span className="font-medium text-warning">
                        {"0"}
                      </span>
                      <span>
                        {"Pending"}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-end justify-center pt-2 shrink-0">
                    <svg className="animate-in aspect-auto duration-300 ease-out fade-in h-12 motion-reduce:animate-none opacity-75 shrink-0 w-24" viewBox="0 0 92 48" aria-hidden="true">
                      <path d="M0,6 L18,25 L36,44 L54,25 L72,44 L90,25" fill="none" stroke="var(--color-muted-foreground)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
          <div className="text-muted-foreground text-sm">
            {"486k events validated. 3 alert rules need review."}
          </div>
          <Button className="font-normal gap-2.5 h-auto p-0 text-sm" type="button" tabIndex={0}>
            {"Open Report"}
            <Item className="border inline-flex p-0 rounded-full size-5.5 text-muted-foreground" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-arrow-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </ItemMedia>
            </Item>
          </Button>
        </footer>
      </Frame>
      <Frame className="w-full">
        <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Segment Validation Reviews"}
            </div>
            <div className="text-muted-foreground text-pretty text-xs">
              {"6 reviews · Jun 10"}
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0 sm:w-auto">
            <Select>
            <SelectTrigger type="button" tabIndex={0} id="base-ui-_r_8_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
              <SelectValue>
                {"All reviews"}
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                {"▼"}
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_8_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"Review"}
            </Button>
          </div>
        </header>
        <FramePanel className="flex flex-col lg:flex-row min-h-0 p-0!">
          <div className="lg:border-border lg:border-r lg:w-[480px] p-5 pt-5.5 shrink-0">
            <Calendar className="md:[--cell-size:--spacing(13)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
              <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                <nav className="absolute flex gap-1 inset-x-0 items-center justify-between rdp-nav top-0 w-full" aria-label="Navigation bar">
                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none p-0 rdp-button_previous select-none shrink-0 size-(--cell-size) transition-all whitespace-nowrap" type="button" aria-label="Go to the Previous Month">
                    <svg className="cn-rtl-flip lucide lucide-chevron-left rdp-chevron size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeftIcon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none p-0 rdp-button_next select-none shrink-0 size-(--cell-size) transition-all whitespace-nowrap" type="button" aria-label="Go to the Next Month">
                    <svg className="cn-rtl-flip lucide lucide-chevron-right rdp-chevron size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRightIcon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </nav>
                <div className="flex flex-col gap-4 rdp-month w-full">
                  <div className="flex h-(--cell-size) items-center justify-center px-(--cell-size) rdp-month_caption w-full">
                    <span className="cn-calendar-caption font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                      {"June 2026"}
                    </span>
                  </div>
                  <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="June 2026">
                    <thead aria-hidden="true">
                      <tr className="flex rdp-weekdays">
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                          {"Su"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                          {"Mo"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                          {"Tu"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                          {"We"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                          {"Th"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                          {"Fr"}
                        </th>
                        <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                          {"Sa"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rdp-weeks">
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-05-31" data-month="2026-05" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/5/31" aria-label="Sunday, May 31st, 2026">
                            {"31"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-01">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/1" aria-label="Monday, June 1st, 2026">
                            {"1"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-02">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/2" aria-label="Tuesday, June 2nd, 2026">
                            {"2"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-03">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/3" aria-label="Wednesday, June 3rd, 2026">
                            {"3"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-04">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/4" aria-label="Thursday, June 4th, 2026">
                            {"4"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-05">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/5" aria-label="Friday, June 5th, 2026">
                            {"5"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-06">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/6" aria-label="Saturday, June 6th, 2026">
                            {"6"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-07">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/7" aria-label="Sunday, June 7th, 2026">
                            {"7"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-08">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/8" aria-label="Monday, June 8th, 2026">
                            {"8"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-09">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/9" aria-label="Tuesday, June 9th, 2026">
                            {"9"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" aria-selected="true" data-day="2026-06-10" data-selected="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={0} day="2026/6/10" selectedSingle="true" aria-label="Wednesday, June 10th, 2026, selected">
                            {"10"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-11">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/11" aria-label="Thursday, June 11th, 2026">
                            {"11"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-12">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/12" aria-label="Friday, June 12th, 2026">
                            {"12"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-13">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/13" aria-label="Saturday, June 13th, 2026">
                            {"13"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-14">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/14" aria-label="Sunday, June 14th, 2026">
                            {"14"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-15">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/15" aria-label="Monday, June 15th, 2026">
                            {"15"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-16">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/16" aria-label="Tuesday, June 16th, 2026">
                            {"16"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-17">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/17" aria-label="Wednesday, June 17th, 2026">
                            {"17"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-18">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/18" aria-label="Thursday, June 18th, 2026">
                            {"18"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-19">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/19" aria-label="Friday, June 19th, 2026">
                            {"19"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-20">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/20" aria-label="Saturday, June 20th, 2026">
                            {"20"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-21">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/21" aria-label="Sunday, June 21st, 2026">
                            {"21"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-22">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/22" aria-label="Monday, June 22nd, 2026">
                            {"22"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-23">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/23" aria-label="Tuesday, June 23rd, 2026">
                            {"23"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-24">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/24" aria-label="Wednesday, June 24th, 2026">
                            {"24"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-25">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/25" aria-label="Thursday, June 25th, 2026">
                            {"25"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-26">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/26" aria-label="Friday, June 26th, 2026">
                            {"26"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-27">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/27" aria-label="Saturday, June 27th, 2026">
                            {"27"}
                          </Button>
                        </td>
                      </tr>
                      <tr className="flex mt-2 rdp-week w-full">
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-28">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/28" aria-label="Sunday, June 28th, 2026">
                            {"28"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-29">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/29" aria-label="Monday, June 29th, 2026">
                            {"29"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-06-30">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/6/30" aria-label="Tuesday, June 30th, 2026">
                            {"30"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-01" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/1" aria-label="Wednesday, July 1st, 2026">
                            {"1"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-02" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/2" aria-label="Thursday, July 2nd, 2026">
                            {"2"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-03" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/3" aria-label="Friday, July 3rd, 2026">
                            {"3"}
                          </Button>
                        </td>
                        <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-07-04" data-month="2026-07" data-outside="true">
                          <Button className="[&>span]:opacity-70 [&>span]:text-xs aspect-square border-0 cn-calendar-day-button dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 isolate leading-none min-w-(--cell-size) rdp-day rdp-day_button relative size-auto w-full z-10" type="button" tabIndex={-1} day="2026/7/4" aria-label="Saturday, July 4th, 2026">
                            {"4"}
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Calendar>
          </div>
          <div className="flex flex-1 flex-col min-h-0 p-5">
            <ScrollArea className="**:data-[slot=scroll-area-thumb]:bg-foreground/15 **:data-[slot=scroll-area-thumb]:rounded-full -mr-3.5 grow max-h-[420px] pr-3.5" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_b_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "47px"}} data-has-overflow-y="" data-overflow-y-end="">
                <ul className="space-y-2.5">
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"SEG-307 Activation Review"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Upcoming"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Mira Stone">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Leo Grant">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Sana Qureshi">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 9:00 am"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Insights Room"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"COH-071 Cohort Replay"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            {"Pending"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Leo Grant">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Nora Vale">
                              <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Theo Park">
                              <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 11:30 am"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Google Meet"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"EXP-224 Checklist QA"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Upcoming"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Mira Stone">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Theo Park">
                              <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 2:00 pm"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Remote"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"SEG-307 Holdout Check"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Upcoming"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Mira Stone">
                              <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Nora Vale">
                              <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Sana Qureshi">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 3:30 pm"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Insights Room"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"COH-084 Retention Gate"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            {"Pending"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Leo Grant">
                              <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Theo Park">
                              <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 4:15 pm"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Google Meet"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                  <li>
                    <Item className="gap-4 items-start py-3" variant="outline" size="xs">
                      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                        <a className="font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                          {"MET-611 Quality Replay"}
                        </a>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Upcoming"}
                          </Badge>
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="size-4!" size="default" title="Nora Vale">
                              <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="size-4!" size="default" title="Sana Qureshi">
                              <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-clock shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            {"Jun 10 · 5:00 pm"}
                          </span>
                          <span className="flex gap-1 items-center text-muted-foreground text-xs">
                            <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx={12} cy={10} r={3}></circle>
                            </svg>
                            {"Remote"}
                          </span>
                        </div>
                      </div>
                    </Item>
                  </li>
                </ul>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_b_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "375.93147751605994px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </div>
        </FramePanel>
      </Frame>
      <Frame className="w-full">
        <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-px">
            <div className="font-semibold text-balance text-sm">
              {"Rule Coverage"}
            </div>
            <div className="text-muted-foreground text-pretty text-sm">
              {"486k events · 6 reviews"}
            </div>
          </div>
          <Button className="sm:w-auto w-full" type="button" tabIndex={0}>
            {"New Rule"}
          </Button>
        </header>
        <FramePanel className="bg-card p-0! shadow-none!">
          <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-wrap gap-2 items-center">
              <Select>
              <SelectTrigger className="w-[180px]" type="button" tabIndex={0} id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"All segments"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_d_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Select>
              <SelectTrigger className="w-[180px]" type="button" tabIndex={0} id="base-ui-_r_g_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                <SelectValue>
                  {"Coverage"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_g_-hidden-input" tabIndex={-1} aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <ButtonGroup role="group">
              <Button type="button" tabIndex={0} aria-label="Previous week">
                <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Button>
              <Popover>
              <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 tabular-nums transition-all w-[168px] whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_k_" aria-haspopup="dialog" aria-expanded="false">
                <span className="truncate">
                  {"Jun 8 - 14"}
                </span>
                <svg className="lucide lucide-calendar text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </PopoverTrigger>
              </Popover>
              <Button type="button" tabIndex={0} aria-label="Next week">
                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </ButtonGroup>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
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
                        <col style={{width: "240px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "124px"}} />
                        <col style={{width: "88px"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="segment" data-header-id="segment" data-header-depth="0" style={{width: "240px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              {"Segment"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-08" data-header-id="2026-06-08" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Mon, Jun 8"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-09" data-header-id="2026-06-09" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Tue, Jun 9"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-10" data-header-id="2026-06-10" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Wed, Jun 10"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-11" data-header-id="2026-06-11" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Thu, Jun 11"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-12" data-header-id="2026-06-12" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Fri, Jun 12"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-13" data-header-id="2026-06-13" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Sat, Jun 13"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="2026-06-14" data-header-id="2026-06-14" data-header-depth="0" style={{width: "124px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                              {"Sun, Jun 14"}
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-10 px-3 relative rtl:text-right text-foreground text-right" scope="col" data-col-id="total" data-header-id="total" data-header-depth="0" style={{width: "88px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                              {"Total"}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="rule-seg-307">
                          <td className="align-middle border-e px-3 py-2">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Trial Workspaces"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate">
                                  {"SEG-307 · Activation"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jun 8: 78k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"78k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "86.6667%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jun 9: 82k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"82k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "91.1111%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jun 10: 76k events, Cohort.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"76k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "84.4444%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Cohort"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jun 11: 84k events, Metric.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"84k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-violet-500 block h-full rounded-full" style={{width: "93.3333%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Metric"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jun 12: 69k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"69k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "76.6667%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jun 13: 21k events, Exclude.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"21k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-red-500 block h-full rounded-full" style={{width: "23.3333%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Exclude"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jun 14: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"410k"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"112%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="rule-coh-071">
                          <td className="align-middle border-e px-3 py-2">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Invite Teams"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate">
                                  {"COH-071 · Retention"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jun 8: 52k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"52k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "57.7778%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jun 9: 57k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"57k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "63.3333%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jun 10: 49k events, Cohort.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"49k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "54.4444%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Cohort"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jun 11: 54k events, Metric.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"54k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-violet-500 block h-full rounded-full" style={{width: "60%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Metric"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jun 12: 46k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"46k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "51.1111%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jun 13: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jun 14: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"258k"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"96%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="rule-fea-118">
                          <td className="align-middle border-e px-3 py-2">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Template Gallery"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate">
                                  {"FEA-118 · Adoption"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jun 8: 47k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"47k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "52.2222%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jun 9: 43k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"43k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "47.7778%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jun 10: 49k events, Cohort.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"49k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "54.4444%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Cohort"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jun 11: 41k events, Metric.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"41k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-violet-500 block h-full rounded-full" style={{width: "45.5556%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Metric"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jun 12: 39k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"39k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "43.3333%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jun 13: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jun 14: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"219k"}
                              </span>
                              <span className="dark:text-amber-400 gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                  <path d="M16 17h6v-6"></path>
                                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                </svg>
                                {"78%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="rule-exp-224">
                          <td className="align-middle border-e px-3 py-2">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Checklist Nudge"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate">
                                  {"EXP-224 · Risk queue"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jun 8: 21k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"21k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "23.3333%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jun 9: 18k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"18k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "20%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jun 10: 16k events, Cohort.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"16k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "18%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Cohort"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jun 11: 19k events, Metric.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"19k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-violet-500 block h-full rounded-full" style={{width: "21.1111%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Metric"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jun 12: 14k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"14k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "18%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jun 13: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jun 14: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"88k"}
                              </span>
                              <span className="dark:text-amber-400 gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                                  <path d="M16 17h6v-6"></path>
                                  <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                </svg>
                                {"49%"}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="rule-met-609">
                          <td className="align-middle border-e px-3 py-2">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <Avatar className="size-8" size="default">
                                <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="flex flex-col leading-tight min-w-0">
                                <div className="font-medium text-foreground text-sm truncate">
                                  {"Activation Threshold"}
                                </div>
                                <div className="pt-0.5 text-muted-foreground text-xs truncate">
                                  {"MET-609 · Activation"}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jun 8: 36k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"36k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "40%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jun 9: 38k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"38k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "42.2222%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jun 10: 34k events, Cohort.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"34k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-sky-500 block h-full rounded-full" style={{width: "37.7778%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Cohort"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jun 11: 35k events, Metric.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"35k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-violet-500 block h-full rounded-full" style={{width: "38.8889%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Metric"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jun 12: 32k events, Include.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                  {"32k"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-emerald-500 block h-full rounded-full" style={{width: "35.5556%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Include"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jun 13: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2">
                            <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-2 py-2 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jun 14: 0 events, Off.">
                              <div className="flex flex-col gap-2 items-center min-w-[86px] text-center w-full">
                                <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                  {"-"}
                                </span>
                                <span className="bg-border block h-1 max-w-[64px] overflow-hidden rounded-full w-full">
                                  <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                </span>
                                <span className="leading-none text-[11px] text-muted-foreground">
                                  {"Off"}
                                </span>
                              </div>
                            </button>
                          </td>
                          <td className="align-middle border-e px-3 py-2 text-right">
                            <div className="flex flex-col gap-1 items-end text-right">
                              <span className="font-semibold tabular-nums text-foreground text-sm">
                                {"175k"}
                              </span>
                              <span className="gap-1 inline-flex items-center tabular-nums text-success text-xs">
                                <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                  <path d="M16 7h6v6"></path>
                                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                {"106%"}
                              </span>
                            </div>
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <DataGridProvider>
            <DataGridPagination>
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex={0} id="base-ui-_r_m_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"5"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_m_-hidden-input" tabIndex={-1} aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 5 of 5"}
                </div>
              </div>
            </DataGridPagination>
            </DataGridProvider>
          </footer>
        </FramePanel>
      </Frame>
    </main>
  )
}
