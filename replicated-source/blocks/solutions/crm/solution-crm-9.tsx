import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
} from "@/registry-neui/bases/base/neui/stepper"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
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
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Deal desk"}
      </h1>
      <div className="@container/desk bg-background flex h-full min-h-0 overflow-hidden text-foreground w-full">
        <aside className="@3xl/desk:border-e @3xl/desk:flex @3xl/desk:flex-none @3xl/desk:w-72 @6xl/desk:w-80 flex flex-1 flex-col min-h-0 w-full" aria-label="Deal queue">
          <div className="flex flex-col h-full min-h-0">
            <header className="border-b flex flex-col px-3 shrink-0">
              <div className="flex gap-2 h-11 items-center justify-between">
                <div className="flex gap-2 items-baseline min-w-0">
                  <h2 className="font-semibold min-w-0 text-sm truncate">
                    {"Deals"}
                  </h2>
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    {"9"}
                  </span>
                </div>
                <div className="flex gap-1 items-center shrink-0">
                  <Button className="@3xl/desk:hidden" type="button" tabIndex="0" aria-label="Open activity" extracted="1">
                    <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M15 3v18"></path>
                    </svg>
                    {"Activity"}
                  </Button>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:text-foreground cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search deals" aria-haspopup="dialog" aria-expanded="false" id="base-ui-_r_2_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="SearchIcon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New deal" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
              <div className="flex h-11 items-center">
                <Select>
                <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Filter by stage">
                  <SelectValue>
                    {"All Stages"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </header>
            <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
              <ul className="flex flex-col gap-2 p-3" aria-label="Deals">
                <li>
                  <Item className="bg-muted/50 hover:bg-muted/50 hover:border-border items-start p-2" href="#" aria-current="true" variant="outline" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Brightwave Media"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$47,700"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Pro Annual, 45 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Jun 28"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Negotiation"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Elena Sokolova" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Cobalt Logistics"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$144,480"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Enterprise Renewal"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Jul 15"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Proposal"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Ryan Mercer" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Orbit Software"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$21,600"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Growth Plan, 30 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Aug 3"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Discovery"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="David Okafor" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Vertex Health"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$63,000"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Pro Annual, 60 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Sep 10"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Qualified"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Hana Kim" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Meridian Retail"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$91,100"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Enterprise Pilot, 80 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Jun 30"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Negotiation"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Ben Travers" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Ridgeline Energy"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$12,000"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Field Ops Add-on"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Jul 22"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Proposal"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarFallback>
                          {"AB"}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Atlas Freight"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$28,800"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Expansion, 40 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closed Jun 12"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Closed Won"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Sofia Marchetti" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Summit Financial"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$22,500"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Pro Annual, 25 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closed Jun 5"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          {"Closed Lost"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
                <li>
                  <Item className="hover:bg-muted/50 hover:border-border items-start p-2" href="#" variant="default" size="xs">
                    <ItemMedia className="-translate-y-px" variant="default">
                      <Avatar size="default">
                        <AvatarImage alt="Marcus Hale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="-mt-0.5 gap-1 min-w-0">
                      <div className="flex gap-2 items-center justify-between min-w-0">
                        <ItemTitle className="leading-none min-w-0 truncate">
                          {"Harbor Point Clinics"}
                        </ItemTitle>
                        <span className="font-medium leading-none shrink-0 tabular-nums text-foreground text-sm">
                          {"$29,500"}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center justify-between min-w-0 text-muted-foreground text-xs">
                        <span className="min-w-0 truncate">
                          {"Growth Plan, 50 seats"}
                        </span>
                        <span className="shrink-0 tabular-nums">
                          {"Closes Aug 20"}
                        </span>
                      </div>
                      <div className="pt-0.5">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Discovery"}
                        </Badge>
                      </div>
                    </ItemContent>
                  </Item>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="@3xl/desk:flex flex-1 flex-col hidden min-h-0 min-w-0" aria-label="Deal detail">
          <div className="@container/detail flex flex-col h-full min-h-0">
            <header className="border-b flex flex-col px-3 shrink-0">
              <div className="flex gap-2 h-11 items-center justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Button className="-ms-1.5 @3xl/desk:hidden hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Back to deals">
                    <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                  </Button>
                  <div className="flex gap-2 items-baseline min-w-0">
                    <h2 className="font-semibold min-w-0 text-sm truncate">
                      {"Brightwave Media"}
                    </h2>
                    <span className="@max-md/detail:hidden shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"DEAL-4821"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center shrink-0">
                  <Button className="@6xl/desk:hidden" type="button" tabIndex="0" aria-label="Open activity">
                    <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M15 3v18"></path>
                    </svg>
                    {"Activity"}
                  </Button>
                  <Button className="@6xl/desk:inline-flex hidden" type="button" tabIndex="0">
                    <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      <path d="M7 11h10"></path>
                      <path d="M7 15h6"></path>
                      <path d="M7 7h8"></path>
                    </svg>
                    {"Add Note"}
                  </Button>
                  <Tooltip>
                  <TooltipTrigger className="@6xl/desk:hidden [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add note" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      <path d="M7 11h10"></path>
                      <path d="M7 15h6"></path>
                      <path d="M7 7h8"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:text-foreground cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More deal actions" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex gap-3 h-11 items-center justify-between">
                <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs whitespace-nowrap">
                  <span className="font-medium min-w-0 text-foreground truncate">
                    {"Pro Annual, 45 seats"}
                  </span>
                  <span className="@max-3xl/desk:hidden flex gap-1.5 items-center shrink-0 tabular-nums">
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    {"Closes Jun 28"}
                  </span>
                  <span className="flex gap-1.5 items-center shrink-0 tabular-nums">
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      {"2d in Negotiation"}
                    </span>
                  </span>
                </div>
                <div className="flex gap-1.5 items-center shrink-0">
                  <Popover>
                  <PopoverTrigger className="cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-full" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_h_" aria-haspopup="dialog" aria-expanded="false" aria-label="3 followers">
                    <AvatarGroup>
                      <Avatar size="sm">
                        <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar size="sm">
                        <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar size="sm">
                        <AvatarFallback>
                          {"EW"}
                        </AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                  </PopoverTrigger>
                  </Popover>
                  <Tooltip>
                  <TooltipTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Follow deal" aria-pressed="true" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-bell-ring" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellRingIcon" tabler="IconBellRinging2" hugeicons="Notification03Icon" phosphor="BellRingingIcon" remixicon="RiNotification4Line" aria-hidden="true">
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </header>
            <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
              <div className="flex flex-col gap-4 max-w-5xl mx-auto p-3 w-full">
                <Card size="sm">
                  <CardContent className="flex flex-col gap-5">
                    <div className="flex flex-wrap gap-x-6 gap-y-4 items-end justify-between">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-muted-foreground text-xs">
                          {"Deal Value"}
                        </span>
                        <span className="font-semibold tabular-nums text-2xl tracking-tight">
                          {"$47,700"}
                        </span>
                        <span className="flex flex-wrap gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                          <span>
                            {"75% win probability"}
                          </span>
                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                          <span>
                            {"$35,775 weighted"}
                          </span>
                        </span>
                      </div>
                      <div className="@2xl/detail:w-auto flex flex-wrap gap-2 items-center w-full">
                        <Select>
                        <SelectTrigger className="@lg/detail:w-44 w-full" type="button" tabIndex="0" id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Deal owner">
                          <SelectValue>
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar className="size-5" size="sm">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="truncate">
                                {"Mira Stone"}
                              </span>
                            </span>
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="mira-stone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <Button className="@lg/detail:flex-none flex-1" type="button" tabIndex="0">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          {"Mark Lost"}
                        </Button>
                        <Button className="@lg/detail:flex-none flex-1" type="button" tabIndex="0">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                          {"Mark Won"}
                        </Button>
                      </div>
                    </div>
                    <StepperItem>
                    <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
                      <Stepper>
                      <StepperNav data-state="4" data-orientation="horizontal">
                        <Stepper>
                        <StepperItem data-state="completed">
                          <Stepper>
                          <StepperTrigger type="button" role="tab" id="stepper-tab-1" aria-selected="false" aria-controls="stepper-panel-1" tabIndex="-1" data-state="completed" loading="false" aria-label="Move to Qualified">
                            <Stepper>
                            <StepperIndicator className="[&_svg]:size-3 bg-ring data-[state=active]:bg-success data-[state=active]:outline-success data-[state=active]:text-white data-[state=completed]:bg-success data-[state=completed]:outline-success data-[state=completed]:text-white m-0.5 outline-1 outline-offset-1 outline-ring size-4.5 text-white" data-state="completed">
                              <div className="absolute">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </div>
                            </StepperIndicator>
                            </Stepper>
                          </StepperTrigger>
                          </Stepper>
                          <StepperSeparator className="[mask-image:radial-gradient(circle,currentColor_1px,transparent_1.5px)] [mask-repeat:space] [mask-size:6px_4px] bg-ring group-data-[orientation=horizontal]/stepper-nav:h-1 group-data-[state=active]/step:bg-linear-to-r group-data-[state=active]/step:from-70% group-data-[state=active]/step:from-success group-data-[state=active]/step:to-ring group-data-[state=completed]/step:bg-success" data-state="completed"></StepperSeparator>
                        </StepperItem>
                        </Stepper>
                        <Stepper>
                        <StepperItem data-state="completed">
                          <Stepper>
                          <StepperTrigger type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="completed" loading="false" aria-label="Move to Discovery">
                            <Stepper>
                            <StepperIndicator className="[&_svg]:size-3 bg-ring data-[state=active]:bg-success data-[state=active]:outline-success data-[state=active]:text-white data-[state=completed]:bg-success data-[state=completed]:outline-success data-[state=completed]:text-white m-0.5 outline-1 outline-offset-1 outline-ring size-4.5 text-white" data-state="completed">
                              <div className="absolute">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </div>
                            </StepperIndicator>
                            </Stepper>
                          </StepperTrigger>
                          </Stepper>
                          <StepperSeparator className="[mask-image:radial-gradient(circle,currentColor_1px,transparent_1.5px)] [mask-repeat:space] [mask-size:6px_4px] bg-ring group-data-[orientation=horizontal]/stepper-nav:h-1 group-data-[state=active]/step:bg-linear-to-r group-data-[state=active]/step:from-70% group-data-[state=active]/step:from-success group-data-[state=active]/step:to-ring group-data-[state=completed]/step:bg-success" data-state="completed"></StepperSeparator>
                        </StepperItem>
                        </Stepper>
                        <Stepper>
                        <StepperItem data-state="completed">
                          <Stepper>
                          <StepperTrigger type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="completed" loading="false" aria-label="Move to Proposal">
                            <Stepper>
                            <StepperIndicator className="[&_svg]:size-3 bg-ring data-[state=active]:bg-success data-[state=active]:outline-success data-[state=active]:text-white data-[state=completed]:bg-success data-[state=completed]:outline-success data-[state=completed]:text-white m-0.5 outline-1 outline-offset-1 outline-ring size-4.5 text-white" data-state="completed">
                              <div className="absolute">
                                <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                              </div>
                            </StepperIndicator>
                            </Stepper>
                          </StepperTrigger>
                          </Stepper>
                          <StepperSeparator className="[mask-image:radial-gradient(circle,currentColor_1px,transparent_1.5px)] [mask-repeat:space] [mask-size:6px_4px] bg-ring group-data-[orientation=horizontal]/stepper-nav:h-1 group-data-[state=active]/step:bg-linear-to-r group-data-[state=active]/step:from-70% group-data-[state=active]/step:from-success group-data-[state=active]/step:to-ring group-data-[state=completed]/step:bg-success" data-state="completed"></StepperSeparator>
                        </StepperItem>
                        </Stepper>
                        <Stepper>
                        <StepperItem data-state="active">
                          <Stepper>
                          <StepperTrigger type="button" role="tab" id="stepper-tab-4" aria-selected="true" aria-controls="stepper-panel-4" tabIndex="0" data-state="active" loading="false" aria-label="Move to Negotiation">
                            <Stepper>
                            <StepperIndicator className="[&_svg]:size-3 bg-ring data-[state=active]:bg-success data-[state=active]:outline-success data-[state=active]:text-white data-[state=completed]:bg-success data-[state=completed]:outline-success data-[state=completed]:text-white m-0.5 outline-1 outline-offset-1 outline-ring size-4.5 text-white" data-state="active">
                              <div className="absolute">
                                <svg className="lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LoaderCircleIcon" tabler="IconLoader2" hugeicons="Loading02Icon" phosphor="CircleNotchIcon" remixicon="RiLoader4Line" aria-hidden="true">
                                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                </svg>
                              </div>
                            </StepperIndicator>
                            </Stepper>
                          </StepperTrigger>
                          </Stepper>
                          <StepperSeparator className="[mask-image:radial-gradient(circle,currentColor_1px,transparent_1.5px)] [mask-repeat:space] [mask-size:6px_4px] bg-ring group-data-[orientation=horizontal]/stepper-nav:h-1 group-data-[state=active]/step:bg-linear-to-r group-data-[state=active]/step:from-70% group-data-[state=active]/step:from-success group-data-[state=active]/step:to-ring group-data-[state=completed]/step:bg-success" data-state="active"></StepperSeparator>
                        </StepperItem>
                        </Stepper>
                        <Stepper>
                        <StepperItem data-state="inactive">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="cursor-pointer disabled:opacity-60 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:z-10 gap-2.5 inline-flex items-center outline-none rounded-full" type="button" role="tab" id="base-ui-_r_q_" aria-selected="false" tabIndex="0" data-state="inactive" loading="false" aria-label="Close the deal" aria-haspopup="menu" aria-expanded="false">
                            <Stepper>
                            <StepperIndicator className="[&_svg]:size-3 bg-ring data-[state=active]:bg-success data-[state=active]:outline-success data-[state=active]:text-white data-[state=completed]:bg-success data-[state=completed]:outline-success data-[state=completed]:text-white m-0.5 outline-1 outline-offset-1 outline-ring size-4.5 text-white" data-state="inactive">
                              <div className="absolute">
                                <svg className="lucide lucide-circle-dashed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDashedIcon" tabler="IconCircleDashed" hugeicons="CircleDashedIcon" phosphor="CircleDashedIcon" remixicon="RiCheckboxBlankCircleLine" aria-hidden="true">
                                  <path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path>
                                  <path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path>
                                  <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path>
                                  <path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path>
                                  <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path>
                                  <path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path>
                                  <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path>
                                  <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path>
                                </svg>
                              </div>
                            </StepperIndicator>
                            </Stepper>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </StepperItem>
                        </Stepper>
                      </StepperNav>
                      </Stepper>
                    </Stepper>
                    </StepperItem>
                  </CardContent>
                </Card>
                <Card size="sm">
                  <Collapsible className="flex flex-col gap-(--card-spacing)" data-open="">
                    <CardHeader className="border-b">
                      <CardTitle>
                        <Collapsible>
                        <CollapsibleTrigger className="cursor-pointer flex gap-2 group/trigger items-center justify-between w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_s_" aria-expanded="true">
                          {"Details"}
                          <span className="duration-150 flex group-data-[panel-open]/trigger:rotate-180 motion-reduce:transition-none text-muted-foreground transition-[rotate]">
                            <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </CardTitle>
                    </CardHeader>
                    <CollapsibleContent data-open="" id="base-ui-_r_s_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                      <CardContent>
                        <div className="@3xl/detail:grid-cols-2 gap-x-8 gap-y-6 grid">
                          <section className="flex flex-col gap-3 min-w-0">
                            <h4 className="font-medium text-muted-foreground text-xs">
                              {"Deal"}
                            </h4>
                            <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Forecast"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"Commit"}
                                  </Badge>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Close Date"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"Jun 28, 2026"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Source"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"Inbound"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Next Step"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"Send revised order form"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Created"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"May 8, 2026 by Emma Wilson"}
                                  </span>
                                </dd>
                              </div>
                            </dl>
                          </section>
                          <section className="flex flex-col gap-3 min-w-0">
                            <h4 className="font-medium text-muted-foreground text-xs">
                              {"Account"}
                            </h4>
                            <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Contact"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="flex gap-2 items-center min-w-0">
                                    <Avatar size="sm">
                                      <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="truncate">
                                      {"Priya Raman"}
                                    </span>
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Title"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"Head of Marketing"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Email"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <a className="hover:underline min-w-0 text-foreground underline-offset-4 wrap-break-word" href="#">
                                    {"priya"}
                                    <wbr />
                                  </a>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Phone"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"+1 415 555 0142"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Website"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"brightwave.media"}
                                  </span>
                                </dd>
                              </div>
                              <div className="contents">
                                <dt className="text-muted-foreground">
                                  {"Segment"}
                                </dt>
                                <dd className="flex items-center leading-5 min-w-0">
                                  <span className="min-w-0 wrap-break-word">
                                    {"Mid-market"}
                                  </span>
                                </dd>
                              </div>
                            </dl>
                          </section>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
                <Card className="pb-0" size="sm">
                  <Collapsible className="flex flex-col" data-open="">
                    <CardHeader className="border-b">
                      <CardTitle>
                        <Collapsible>
                        <CollapsibleTrigger className="cursor-pointer flex gap-2 group/trigger items-center justify-between w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_t_" aria-expanded="true">
                          {"Line Items"}
                          <span className="duration-150 flex group-data-[panel-open]/trigger:rotate-180 motion-reduce:transition-none text-muted-foreground transition-[rotate]">
                            <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </span>
                        </CollapsibleTrigger>
                        </Collapsible>
                      </CardTitle>
                    </CardHeader>
                    <CollapsibleContent data-open="" id="base-ui-_r_t_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                      <CardContent className="px-0">
                        <div className="cn-table-container">
                          <Table aria-label="Deal line items">
                            <TableHeader>
                              <TableRow>
                                <TableHead className="ps-(--card-spacing)">
                                  {"Product"}
                                </TableHead>
                                <TableHead className="text-right">
                                  {"Qty"}
                                </TableHead>
                                <TableHead className="@xl/detail:table-cell hidden text-right">
                                  {"Unit Price"}
                                </TableHead>
                                <TableHead className="@xl/detail:table-cell hidden text-right">
                                  {"Discount"}
                                </TableHead>
                                <TableHead className="pe-(--card-spacing) text-right">
                                  {"Total"}
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="max-w-0 min-w-40 ps-(--card-spacing)">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium truncate">
                                      {"Pro Plan"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Annual, per seat"}
                                    </span>
                                    <span className="@xl/detail:hidden tabular-nums text-muted-foreground text-xs truncate">
                                      {"$1,000 each, 12% off"}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell className="tabular-nums text-right">
                                  {"45"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-right">
                                  {"$1,000"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-muted-foreground text-right">
                                  {"12%"}
                                </TableCell>
                                <TableCell className="font-medium pe-(--card-spacing) tabular-nums text-right">
                                  {"$39,600"}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="max-w-0 min-w-40 ps-(--card-spacing)">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium truncate">
                                      {"SSO Add-on"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"Annual, per seat"}
                                    </span>
                                    <span className="@xl/detail:hidden tabular-nums text-muted-foreground text-xs truncate">
                                      {"$80 each"}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell className="tabular-nums text-right">
                                  {"45"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-right">
                                  {"$80"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-muted-foreground text-right">
                                  {"None"}
                                </TableCell>
                                <TableCell className="font-medium pe-(--card-spacing) tabular-nums text-right">
                                  {"$3,600"}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="max-w-0 min-w-40 ps-(--card-spacing)">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium truncate">
                                      {"Guided Onboarding"}
                                    </span>
                                    <span className="text-muted-foreground text-xs truncate">
                                      {"One time, 6 weeks"}
                                    </span>
                                    <span className="@xl/detail:hidden tabular-nums text-muted-foreground text-xs truncate">
                                      {"$4,500 each"}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell className="tabular-nums text-right">
                                  {"1"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-right">
                                  {"$4,500"}
                                </TableCell>
                                <TableCell className="@xl/detail:table-cell hidden tabular-nums text-muted-foreground text-right">
                                  {"None"}
                                </TableCell>
                                <TableCell className="font-medium pe-(--card-spacing) tabular-nums text-right">
                                  {"$4,500"}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                            <TableFooter>
                              <TableRow>
                                <TableCell className="ps-(--card-spacing)">
                                  <div className="flex flex-col">
                                    <span className="font-medium">
                                      {"Deal Total"}
                                    </span>
                                    <span className="font-normal tabular-nums text-muted-foreground text-xs">
                                      {"$5,400 off list"}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell className="@xl/detail:table-cell hidden"></TableCell>
                                <TableCell className="@xl/detail:table-cell hidden"></TableCell>
                                <TableCell className="font-semibold pe-(--card-spacing) tabular-nums text-right">
                                  {"$47,700"}
                                </TableCell>
                              </TableRow>
                            </TableFooter>
                          </Table>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <aside className="@6xl/desk:flex border-s flex-col flex-none hidden min-h-0 w-88" aria-label="Deal activity">
          <Tabs className="flex-col gap-0 h-full min-h-0" data-orientation="horizontal" activationDirection="none">
            <header className="border-b flex flex-col px-3 shrink-0">
              <div className="flex gap-2 h-11 items-center justify-between">
                <div className="flex gap-2 items-center min-w-0">
                  <Avatar size="sm">
                    <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex gap-2 items-baseline min-w-0">
                    <h2 className="font-semibold min-w-0 text-sm truncate">
                      {"Priya Raman"}
                    </h2>
                    <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                      {"Last touch 10:02 AM"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 h-11 items-stretch">
                <TabsList className="-mb-px gap-4 h-auto! p-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Activity views">
                  <TabsTrigger className="after:-bottom-px! flex-none h-full! px-0" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_u_" compositeItemActive="" aria-controls="base-ui-_r_13_">
                    {"Activity"}
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none h-full! px-0" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_v_">
                    {"Owner Pipeline"}
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center min-w-0 ms-auto">
                  <Select>
                  <SelectTrigger className="min-w-0" type="button" tabIndex="0" id="base-ui-_r_10_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Filter activity">
                    <SelectValue>
                      {"All Types"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_10_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
            </header>
            <TabsContent className="flex flex-col min-h-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_13_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_u_">
              <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
                <div className="flex flex-col gap-4 py-3">
                  <section aria-label="Jun 12">
                    <h3 className="font-medium leading-none pb-2 px-3 text-muted-foreground text-xs">
                      {"Jun 12"}
                    </h3>
                    <ul className="flex flex-col gap-2 px-3">
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                              </IconTile>
                              {"Email"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"2:30 PM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Sharing the proposal for 45 Pro seats with guided onboarding. Happy to walk your team through it on Thursday."}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Mira Stone"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Enterprise AE"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Jun 15">
                    <h3 className="font-medium leading-none pb-2 px-3 text-muted-foreground text-xs">
                      {"Jun 15"}
                    </h3>
                    <ul className="flex flex-col gap-2 px-3">
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                              </IconTile>
                              {"Email"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"9:12 AM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Thanks Mira. Our security team needs SSO before we sign. Can you add it to the order?"}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Priya Raman"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-smartphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                  <path d="M12 18h.01"></path>
                                </svg>
                              </IconTile>
                              {"Call"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"11:40 AM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Pricing call, 25 min. Agreed on 12% off Pro seats if the order is signed by Jun 28."}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Mira Stone"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Enterprise AE"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Jun 17">
                    <h3 className="font-medium leading-none pb-2 px-3 text-muted-foreground text-xs">
                      {"Jun 17"}
                    </h3>
                    <ul className="flex flex-col gap-2 px-3">
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                  <path d="M7 11h10"></path>
                                  <path d="M7 15h6"></path>
                                  <path d="M7 7h8"></path>
                                </svg>
                              </IconTile>
                              {"Note"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"4:18 PM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Discount approved up to 12%. Anything deeper needs a two year term."}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Nora Vale"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Sales Manager"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Today">
                    <h3 className="font-medium leading-none pb-2 px-3 text-muted-foreground text-xs">
                      {"Today"}
                    </h3>
                    <ul className="flex flex-col gap-2 px-3">
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                              </IconTile>
                              {"Email"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"9:41 AM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Legal sent the redlines back. The renewal notice clause is the only open item."}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Priya Raman"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                      <li>
                        <Item className="p-2" variant="outline" size="sm">
                          <ItemHeader>
                            <span className="flex font-medium gap-2 items-center text-xs">
                              <IconTile variant="outline" size="sm">
                                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                              </IconTile>
                              {"Email"}
                            </span>
                            <span className="tabular-nums text-foreground text-xs">
                              {"10:02 AM"}
                            </span>
                          </ItemHeader>
                          <ItemContent>
                            <ItemDescription className="line-clamp-none">
                              {"Great news. I will send the revised order form with SSO included by 4 PM today."}
                            </ItemDescription>
                          </ItemContent>
                          <ItemFooter className="min-w-0">
                            <span className="flex gap-2 items-center min-w-0">
                              <Avatar size="sm">
                                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <span className="font-medium text-xs truncate">
                                {"Mira Stone"}
                              </span>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Enterprise AE"}
                              </span>
                            </span>
                          </ItemFooter>
                        </Item>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
              <form className="@container/composer border-t p-3 shrink-0">
                <InputGroup role="group">
                  <InputGroupAddon role="group" data-align="block-start">
                    <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center min-w-0 text-xs truncate">
                      {"To Priya Raman"}
                    </span>
                  </InputGroupAddon>
                  <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-40 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" placeholder="Write to Priya" aria-label="Email message"></textarea>
                  <InputGroupAddon className="gap-2" role="group" data-align="block-end">
                    <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Activity type" style={{"--gap": "0"}}>
                      <ToggleGroupItem className="@max-xs/composer:px-0 @max-xs/composer:size-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="Email">
                        <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                        <span className="@max-xs/composer:sr-only">
                          {"Email"}
                        </span>
                      </ToggleGroupItem>
                      <ToggleGroupItem className="@max-xs/composer:px-0 @max-xs/composer:size-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Note">
                        <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                          <path d="M7 11h10"></path>
                          <path d="M7 15h6"></path>
                          <path d="M7 7h8"></path>
                        </svg>
                        <span className="@max-xs/composer:sr-only">
                          {"Note"}
                        </span>
                      </ToggleGroupItem>
                      <ToggleGroupItem className="@max-xs/composer:px-0 @max-xs/composer:size-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Call">
                        <svg className="lucide lucide-smartphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                          <path d="M12 18h.01"></path>
                        </svg>
                        <span className="@max-xs/composer:sr-only">
                          {"Call"}
                        </span>
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center ms-auto outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" disabled="" tabIndex="0" disabled size="sm" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                      {"Send"}
                    </TooltipTrigger>
                    </Tooltip>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </TabsContent>
          </Tabs>
        </aside>
      </div>
    </main>
  )
}
