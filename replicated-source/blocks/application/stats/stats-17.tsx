import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-8 p-6 w-full">
      <div className="@container grow w-full">
        <div className="@[59rem]:grid-cols-3 gap-3 grid">
          <Frame spacing="default">
            <FramePanel className="@container flex flex-col">
              <Tabs className="gap-4 grow" data-orientation="horizontal" activationDirection="none">
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-1 items-center min-w-0">
                    <h3 className="font-medium text-sm truncate">
                      {"Equities"}
                    </h3>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="About Equities" id="base-ui-_r_1_" baseUiTooltipTrigger="" extracted="1">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <TabsList className="shrink-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_" aria-label="Week">
                      {"1W"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_3_" compositeItemActive="" aria-label="Month" aria-controls="base-ui-_r_7_">
                      {"1M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_" aria-label="Quarter">
                      {"3M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5_" aria-label="Year">
                      {"1Y"}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent className="flex flex-col gap-3" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_7_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_3_">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                    <span className="font-medium tabular-nums text-2xl tracking-tight">
                      {"52%"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                        <path d="m5 12 7-7 7 7"></path>
                        <path d="M12 19V5"></path>
                      </svg>
                      <span className="tabular-nums">
                        {"+5.1%"}
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"vs last month"}
                    </span>
                  </div>
                  <div className="flex h-6 items-stretch justify-between w-full" aria-label="Equities allocation is 52%" role="img">
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-success rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                  </div>
                  <div className="@3xs:flex-row @3xs:gap-3 @3xs:items-center @3xs:justify-between flex flex-col gap-2 items-start mt-auto">
                    <p className="flex gap-1.5 items-baseline">
                      <span className="text-muted-foreground text-xs">
                        {"Exposure"}
                      </span>
                      <span className="font-medium tabular-nums text-sm">
                        {"$5.2M"}
                      </span>
                    </p>
                    <div className="flex gap-2 items-center">
                      <AvatarGroup>
                        <Avatar size="sm">
                          <AvatarImage alt="Maya Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage alt="Ivan Brooks" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarFallback>
                            {"KP"}
                          </AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                        {"6 Managers"}
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FramePanel>
          </Frame>
          <Frame spacing="default">
            <FramePanel className="@container flex flex-col">
              <Tabs className="gap-4 grow" data-orientation="horizontal" activationDirection="none">
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-1 items-center min-w-0">
                    <h3 className="font-medium text-sm truncate">
                      {"Fixed Income"}
                    </h3>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="About Fixed Income" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <TabsList className="shrink-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_c_" aria-label="Week">
                      {"1W"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_d_" compositeItemActive="" aria-label="Month" aria-controls="base-ui-_r_h_">
                      {"1M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_e_" aria-label="Quarter">
                      {"3M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_f_" aria-label="Year">
                      {"1Y"}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent className="flex flex-col gap-3" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_h_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_d_">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                    <span className="font-medium tabular-nums text-2xl tracking-tight">
                      {"29%"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                      <span className="tabular-nums">
                        {"-2.6%"}
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"vs last month"}
                    </span>
                  </div>
                  <div className="flex h-6 items-stretch justify-between w-full" aria-label="Fixed Income allocation is 29%" role="img">
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-info rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                  </div>
                  <div className="@3xs:flex-row @3xs:gap-3 @3xs:items-center @3xs:justify-between flex flex-col gap-2 items-start mt-auto">
                    <p className="flex gap-1.5 items-baseline">
                      <span className="text-muted-foreground text-xs">
                        {"Exposure"}
                      </span>
                      <span className="font-medium tabular-nums text-sm">
                        {"$2.9M"}
                      </span>
                    </p>
                    <div className="flex gap-2 items-center">
                      <AvatarGroup>
                        <Avatar size="sm">
                          <AvatarImage alt="Lena Ortiz" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage alt="Jonas Keller" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                        {"2 Managers"}
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FramePanel>
          </Frame>
          <Frame spacing="default">
            <FramePanel className="@container flex flex-col">
              <Tabs className="gap-4 grow" data-orientation="horizontal" activationDirection="none">
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-1 items-center min-w-0">
                    <h3 className="font-medium text-sm truncate">
                      {"Alternatives"}
                    </h3>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="About Alternatives" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <TabsList className="shrink-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_m_" aria-label="Week">
                      {"1W"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_n_" compositeItemActive="" aria-label="Month" aria-controls="base-ui-_r_r_">
                      {"1M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_o_" aria-label="Quarter">
                      {"3M"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_p_" aria-label="Year">
                      {"1Y"}
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent className="flex flex-col gap-3" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_r_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_n_">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                    <span className="font-medium tabular-nums text-2xl tracking-tight">
                      {"12%"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                      <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                      <span className="tabular-nums">
                        {"-0.9%"}
                      </span>
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {"vs last month"}
                    </span>
                  </div>
                  <div className="flex h-6 items-stretch justify-between w-full" aria-label="Alternatives allocation is 12%" role="img">
                    <span className="bg-warning rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-warning rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-warning rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-warning rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-warning rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                    <span className="bg-muted rounded-full shrink-0 w-1" aria-hidden="true"></span>
                  </div>
                  <div className="@3xs:flex-row @3xs:gap-3 @3xs:items-center @3xs:justify-between flex flex-col gap-2 items-start mt-auto">
                    <p className="flex gap-1.5 items-baseline">
                      <span className="text-muted-foreground text-xs">
                        {"Exposure"}
                      </span>
                      <span className="font-medium tabular-nums text-sm">
                        {"$1.2M"}
                      </span>
                    </p>
                    <div className="flex gap-2 items-center">
                      <AvatarGroup>
                        <Avatar size="sm">
                          <AvatarImage alt="Priya Nair" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage alt="Theo Walsh" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage alt="Clara Weiss" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                      <span className="text-muted-foreground text-xs whitespace-nowrap">
                        {"5 Managers"}
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
