import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Dialog,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-3xl w-full" spacing="default">
        <header className="@container/header flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-2 gap-y-3 items-center px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="flex flex-1 flex-col gap-px min-w-0">
            <div className="font-semibold text-sm">
              {"Deploy History"}
            </div>
            <div className="tabular-nums text-muted-foreground text-xs whitespace-nowrap" aria-live="polite">
              {"6 deploys"}
            </div>
          </div>
          <ToggleGroup className="@xl/header:order-none @xl/header:w-fit order-last w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Environment" style={{"--gap": "0"}}>
            <ToggleGroupItem className="@xl/header:flex-none [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="sm" spacing="0" aria-label="All, 6 deploys" extracted="1">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"All"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"6"}
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="@xl/header:flex-none [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Production, 4 deploys">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Production"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"4"}
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="@xl/header:flex-none [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-pressed:bg-card aria-pressed:text-foreground cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="sm" spacing="0" aria-label="Staging, 2 deploys">
              <span className="[text-box:trim-both_cap_alphabetic]">
                {"Staging"}
              </span>
              <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                {"2"}
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="flex gap-2 items-center shrink-0">
            <Dialog>
            <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"New deploy"}
            </DialogTrigger>
            </Dialog>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <FramePanel className="@container/panel p-0">
          <ItemGroup className="gap-0" role="list" aria-label="Deploy history">
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"fraud-scorer"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v3.9.0"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4128"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Waiting"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Waiting for Promote at Canary 50%" id="base-ui-_r_b_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Waiting for Promote at Canary 50%">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-warning overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"5/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 29, 14:12"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"8m ago"}
                </span>
              </div>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                    <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                    <line x1={2} x2={22} y1={10} y2={10}></line>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"payments-api"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v2.41.0"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4127"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Succeeded"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed" id="base-ui-_r_d_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"6/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 29, 13:51"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"29m ago"}
                </span>
              </div>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-arrow-left-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftRightIcon" tabler="IconArrowsLeftRight" hugeicons="ArrowDataTransferHorizontalIcon" phosphor="ArrowsLeftRightIcon" remixicon="RiArrowLeftRightLine" aria-hidden="true">
                    <path d="M8 3 4 7l4 4"></path>
                    <path d="M4 7h16"></path>
                    <path d="m16 21 4-4-4-4"></path>
                    <path d="M20 17H4"></path>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"reconciliation"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v2.7.1"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4125"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                    {"Rolled back"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rolled back at Canary 25%, 3 of 6 stages passed" id="base-ui-_r_f_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rolled back at Canary 25%, 3 of 6 stages passed">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-destructive overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"3/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 29, 10:38"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"3h ago"}
                </span>
              </div>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"ledger-worker"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Staging"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v1.18.4"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4124"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Staging"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    {"Failed"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Failed at Wave 1, 3 of 6 stages passed" id="base-ui-_r_h_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Failed at Wave 1, 3 of 6 stages passed">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-destructive overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"3/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 29, 10:02"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"4h ago"}
                </span>
              </div>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"notifications"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Staging"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v3.5.0"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4112"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Staging"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                    {"Failed"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Failed at Test, 1 of 6 stages passed" id="base-ui-_r_j_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Failed at Test, 1 of 6 stages passed">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-destructive overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-muted-foreground/25 overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"1/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 28, 21:05"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"17h ago"}
                </span>
              </div>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemMedia variant="default">
                <IconTile variant="elevated" size="default" aria-hidden="true">
                  <svg className="lucide lucide-scan-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                    <circle cx={12} cy={12} r={3}></circle>
                    <path d="m16 16-1.9-1.9"></path>
                  </svg>
                </IconTile>
              </ItemMedia>
              <ItemContent className="gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"search-indexer"}
                  </span>
                  <Badge className="@2xl/panel:inline-flex [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                </ItemTitle>
                <ItemDescription className="flex font-mono gap-1.5 items-center min-w-0 text-xs">
                  <span className="truncate">
                    {"v2.3.0"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="shrink-0">
                    {"DEP-4108"}
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@2xl/panel:basis-auto @2xl/panel:order-none basis-full gap-4 justify-between order-last">
                <span className="@2xl/panel:w-24 flex gap-1.5 items-center shrink-0">
                  <Badge className="@2xl/panel:hidden [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    {"Production"}
                  </Badge>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Succeeded"}
                  </Badge>
                </span>
                <div className="@2xl/panel:flex-none @2xl/panel:w-36 flex-1 max-w-36 min-w-0">
                  <HoverCard>
                  <HoverCardTrigger className="cursor-help flex focus-visible:outline-2 focus-visible:outline-ring/50 gap-2 items-center min-w-0 outline-offset-2 w-full" type="button" aria-label="Rollout complete, 6 of 6 stages passed" id="base-ui-_r_l_">
                    <span className="flex-1 gap-1 grid grid-cols-6 h-1.5 min-w-16" role="img" aria-label="Rollout complete, 6 of 6 stages passed">
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                      <span className="bg-success overflow-hidden relative rounded-full" aria-hidden="true"></span>
                    </span>
                    <span className="shrink-0 tabular-nums text-right text-xs w-8">
                      {"6/6"}
                    </span>
                  </HoverCardTrigger>
                  </HoverCard>
                </div>
              </ItemActions>
              <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
                <span className="tabular-nums text-sm whitespace-nowrap">
                  {"Sep 28, 18:07"}
                </span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {"20h ago"}
                </span>
              </div>
            </Item>
          </ItemGroup>
        </FramePanel>
      </Frame>
    </div>
  )
}
