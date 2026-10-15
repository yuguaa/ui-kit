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
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-3xl min-w-0 w-full" spacing="default">
        <header className="@container/head flex flex-row flex-wrap gap-(--frame-panel-header-gap) gap-x-3 gap-y-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="basis-48 flex gap-3 grow items-center min-w-0">
            <IconTile variant="frame" size="sm" aria-hidden="true">
              <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                <path d="M13 5h8"></path>
                <path d="M13 12h8"></path>
                <path d="M13 19h8"></path>
                <path d="m3 17 2 2 4-4"></path>
                <path d="m3 7 2 2 4-4"></path>
              </svg>
            </IconTile>
            <div className="flex flex-col gap-px min-w-0">
              <div className="font-semibold text-sm truncate" role="heading" aria-level="3">
                {"Objectives"}
              </div>
              <div className="text-muted-foreground text-sm truncate">
                <span className="flex gap-1.5 items-center min-w-0 tabular-nums">
                  <span className="shrink-0">
                    {"7 SLOs"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"4 need attention"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="@max-lg/head:w-full flex flex-wrap gap-2 items-center">
            <ToggleGroup className="@max-lg/head:w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Filter SLOs" style={{"--gap": "0"}}>
              <ToggleGroupItem className="@max-lg/head:flex-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline dark:data-pressed:bg-muted data-pressed:bg-card data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0" extracted="1">
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"All"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                  {"7"}
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem className="@max-lg/head:flex-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline dark:data-pressed:bg-muted data-pressed:bg-card data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] gap-1.5 group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                <span className="[text-box:trim-both_cap_alphabetic]">
                  {"Needs attention"}
                </span>
                <span className="[text-box:trim-both_cap_alphabetic] tabular-nums text-muted-foreground">
                  {"4"}
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="@max-lg/head:w-full flex gap-2 items-center min-w-0">
              <Select>
              <SelectTrigger className="@max-lg/head:flex-1 w-36" type="button" tabIndex="0" id="base-ui-_r_2_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Sort SLOs">
                <SelectValue>
                  <span className="[&_svg]:size-3.5 flex text-muted-foreground">
                    <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" aria-hidden="true">
                      <path d="m21 16-4 4-4-4"></path>
                      <path d="M17 20V4"></path>
                      <path d="m3 8 4-4 4 4"></path>
                      <path d="M7 4v16"></path>
                    </svg>
                  </span>
                  {"Budget left"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2_-hidden-input" tabIndex="-1" aria-hidden="true" value="budget" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              <Dialog>
              <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New SLO"}
              </DialogTrigger>
              </Dialog>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <FramePanel className="@container/slos p-0">
          <ItemGroup className="gap-0" role="list">
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Ledger write success"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"ledger-worker"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99.99% over 30d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <svg x="50%" y="50%" overflow="visible">
                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-rc" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="5.1314676332532425%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="5.1314676332532425%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-rc)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="5.1314676332532425%" cy="50%" r="4" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="font-medium text-destructive text-sm">
                        {"42%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"over"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 42% over budget, -39 pts over 7 days" id="base-ui-_r_e_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="7.556563214711238" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="7.598032187716895" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="7.494498179388996" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="7.566304507306625" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="7.52583820074521" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="7.435257353695353" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="7.371204849497289" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="7.291668771126995" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="7.316812239847448" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="7.335148609143116" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="7.3258330436754" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="7.31421341618516" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="7.323163911970618" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="7.343587090546971" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="7.34410504499566" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="7.291568997738274" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="7.3766768711985815" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="7.366571320801055" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="7.381336565907148" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="18.208430021852116" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="70.14814814814815" cy="18.146060730488266" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="73.55555555555556" cy="18.169229485613904" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="76.96296296296296" cy="18.133000047729418" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="80.37037037037037" cy="18.11544928426008" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="83.77777777777777" cy="23.76733700013971" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="87.18518518518519" cy="23.904237469444624" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="90.5925925925926" cy="23.7618146729701" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <line x1="94" x2="94" y1="17.5" y2="19.621077120684287" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                      <circle cx="94" cy="23.871077120684287" r="2.75" fill="var(--destructive)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"SMS provider availability"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"notifications"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99.5% over 28d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <svg x="50%" y="50%" overflow="visible">
                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-rf" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="20.261281070488227%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="20.261281070488227%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-rf)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="20.261281070488227%" cy="50%" r="4" fill="var(--destructive)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="font-medium text-destructive text-sm">
                        {"20%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"over"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 20% over budget, -96 pts over 7 days" id="base-ui-_r_h_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="6.533960601165113" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="6.543061096580125" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="6.543671455109401" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="6.496004321723416" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="6.457225413538117" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="6.490885897993616" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="6.480500270206429" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="6.520658525111532" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="6.462436356485502" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="6.539306055755469" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="6.5923701621376" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="6.556305462210263" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="6.563407389549965" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="6.595980178283906" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="6.59605126170395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="6.578991600681434" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="6.583513572826227" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="6.544323205890312" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="6.623006381411603" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="6.526416762204746" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="6.504721695781527" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="20.185108266415938" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="76.96296296296296" cy="20.157450730039688" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="80.37037037037037" cy="20.228060048246675" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="83.77777777777777" cy="20.238556602441342" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="87.18518518518519" cy="20.277983324290297" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="90.5925925925926" cy="20.329552606847013" r="1.5" fill="var(--destructive)" fillOpacity="0.7"></circle>
                      <circle cx="94" cy="20.54251816449259" r="2.75" fill="var(--destructive)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Index freshness"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"search-indexer"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99% over 7d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-ri" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="43.15789473684216%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="43.15789473684216%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-ri)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="43.15789473684216%" cy="50%" r="4" fill="var(--warning)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="dark:text-warning font-medium text-sm text-warning-foreground">
                        {"15%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"left"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 15% left, -43 pts over 7 days" id="base-ui-_r_k_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="7.9470899470899425" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="7.9470899470899425" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="8.529100529100523" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="8.965608465608462" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="8.965608465608462" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="8.820105820105816" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="8.238095238095232" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="8.092592592592588" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="9.111111111111107" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="8.674603174603167" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="9.111111111111107" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="9.402116402116395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="9.984126984126979" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="9.25661375661375" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                      <circle cx="76.96296296296296" cy="9.54761904761904" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                      <circle cx="80.37037037037037" cy="9.402116402116395" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                      <circle cx="83.77777777777777" cy="9.693121693121686" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                      <circle cx="87.18518518518519" cy="15.222222222222207" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                      <circle cx="90.5925925925926" cy="15.076719576719565" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                      <circle cx="94" cy="15.505263157894728" r="2.75" fill="var(--warning)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Payout batch on time"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"payouts-scheduler"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99.5% over 30d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-rl" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="43.37556702643521%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="43.37556702643521%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-rl)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="43.37556702643521%" cy="50%" r="4" fill="var(--warning)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="dark:text-warning font-medium text-sm text-warning-foreground">
                        {"15%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"left"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 15% left, -18 pts over 7 days" id="base-ui-_r_n_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="9.993827160493822" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="9.858024691358018" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="9.790123456790116" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="9.858024691358018" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="9.92592592592592" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="13.117283950617274" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="13.049382716049374" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="12.981481481481472" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="12.845679012345672" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="12.77777777777777" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                      <circle cx="76.96296296296296" cy="12.845679012345672" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                      <circle cx="80.37037037037037" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                      <circle cx="83.77777777777777" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                      <circle cx="87.18518518518519" cy="12.91358024691357" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                      <circle cx="90.5925925925926" cy="15.493827160493815" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                      <circle cx="94" cy="15.457375254184253" r="2.75" fill="var(--warning)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Charge API availability"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"payments-api"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99.95% over 28d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <svg x="50%" y="50%" overflow="visible">
                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-ro" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="65.66175261631295%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="65.66175261631295%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-ro)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="65.66175261631295%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="font-medium text-foreground text-sm">
                        {"48%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"left"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 48% left, -31 pts over 7 days" id="base-ui-_r_q_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="5.901948509800085" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="5.899272598994678" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="5.906178316194657" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="5.93134191739086" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="5.92386899102064" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="5.912123886820176" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="5.925010499432244" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="5.91311201547178" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="5.913277661632234" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="5.957037334807621" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="5.967955209906474" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="5.937486717470439" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="5.92901891982126" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="5.983604088579133" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="5.9640132929347445" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="5.960322786488388" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="6.031501301931156" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="6.052403150185983" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="6.015482626183532" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="6.011193379436538" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="6.0462634986954376" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="6.062408949398377" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                      <circle cx="76.96296296296296" cy="10.498207167993353" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                      <circle cx="80.37037037037037" cy="10.488581631360757" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                      <circle cx="83.77777777777777" cy="10.459813009133219" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                      <circle cx="87.18518518518519" cy="10.517268749279118" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                      <circle cx="90.5925925925926" cy="10.471753936833457" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                      <line x1="94" x2="94" y1="17.5" y2="14.804414424411151" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                      <circle cx="94" cy="10.554414424411151" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Push delivery latency"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"notifications"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99% over 7d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <svg x="50%" y="50%" overflow="visible">
                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-rr" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="80.22288861383056%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="80.22288861383056%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-rr)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="80.22288861383056%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="font-medium text-foreground text-sm">
                        {"70%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"left"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 70% left, +3 pts over 7 days" id="base-ui-_r_t_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="7.214355775024815" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="7.112335745697771" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="7.443341708598782" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="7.355746813613824" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="7.092177405426021" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="7.034685548575581" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="6.88838519033613" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="6.891215049946604" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="6.619829943713329" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="6.55133438409222" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="6.693100551302407" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="6.690942628821898" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="6.865318167627415" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="7.096858588061882" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="7.202495321034401" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="7.39258359083234" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="7.328582114673181" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="7.456032035763545" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="7.5829584908248275" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="7.798906236533767" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="7.755411654359877" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="7.886765608557037" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                      <circle cx="76.96296296296296" cy="7.673327271657945" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                      <circle cx="80.37037037037037" cy="7.792812624736003" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                      <circle cx="83.77777777777777" cy="7.497026076087783" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                      <circle cx="87.18518518518519" cy="7.504894190583255" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                      <circle cx="90.5925925925926" cy="7.300172126521572" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                      <line x1="94" x2="94" y1="17.5" y2="11.600964504957275" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                      <circle cx="94" cy="7.350964504957275" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
            <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
            <Item className="px-(--frame-panel-px)" variant="default" size="sm" role="listitem">
              <ItemContent className="@lg/slos:basis-0 basis-full gap-0.5 min-w-0">
                <ItemTitle className="max-w-full min-w-0">
                  <span className="min-w-0 truncate">
                    {"Refund API availability"}
                  </span>
                </ItemTitle>
                <ItemDescription className="text-xs">
                  <span className="flex gap-1.5 items-center min-w-0">
                    <span className="[&_svg]:size-3 flex gap-1 items-center min-w-0">
                      <span className="flex shrink-0 text-muted-foreground">
                        <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                      </span>
                      <span className="truncate">
                        {"payments-api"}
                      </span>
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0 tabular-nums">
                      {"99.9% over 28d"}
                    </span>
                  </span>
                </ItemDescription>
              </ItemContent>
              <ItemActions className="@lg/slos:w-auto gap-4 justify-between w-full">
                <div className="w-40">
                  <div className="flex gap-3 items-center">
                    <svg className="block h-4 overflow-visible shrink-0 w-20" width="100%" aria-hidden="true">
                      <line x1="0" x2="100%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round"></line>
                      <svg x="33.33333333333333%" y="50%" overflow="visible">
                        <line y1="-5" y2="5" stroke="var(--foreground)" strokeOpacity="0.3" strokeWidth="1.25"></line>
                      </svg>
                      <svg x="50%" y="50%" overflow="visible">
                        <line y1="-3" y2="3" stroke="var(--warning)" strokeOpacity="1" strokeWidth="1.25"></line>
                      </svg>
                      <mask id="lollipop-ru" maskUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
                        <rect x="-50%" y="-50%" width="200%" height="200%" fill="white"></rect>
                        <circle cx="92.22005661546007%" cy="50%" r="6" fill="black"></circle>
                      </mask>
                      <line x1="33.33333333333333%" x2="92.22005661546007%" y1="50%" y2="50%" stroke="var(--muted-foreground)" strokeOpacity="0.4" strokeWidth="2" mask="url(#lollipop-ru)"></line>
                      <g className="[[data-demo=frozen]_&]:transition-none [transform-box:fill-box] duration-150 group-focus-visible/item:scale-125 group-hover/item:scale-125 motion-reduce:transition-none origin-center transition-transform">
                        <circle cx="92.22005661546007%" cy="50%" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" paint-order="stroke"></circle>
                      </g>
                    </svg>
                    <span className="flex gap-1 items-baseline tabular-nums">
                      <span className="font-medium text-foreground text-sm">
                        {"88%"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"left"}
                      </span>
                    </span>
                  </div>
                </div>
                <HoverCard>
                <HoverCardTrigger className="flex focus-visible:outline-2 focus-visible:outline-ring/50 outline-offset-2" type="button" aria-label="Rolling budget 88% left, 0 pts over 7 days" id="base-ui-_r_10_">
                  <span className="flex h-7 w-24" aria-hidden="true">
                    <svg className="block overflow-visible" aria-hidden="true" width="96" height="28" viewBox="0 0 96 28">
                      <line x1="0" x2="96" y1="17.5" y2="17.5" stroke="var(--border)" strokeWidth="1"></line>
                      <circle cx="2" cy="4.79796610257161" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.35"></circle>
                      <circle cx="5.407407407407407" cy="4.812851596545437" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.36538461538461536"></circle>
                      <circle cx="8.814814814814815" cy="4.8003822125721225" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.38076923076923075"></circle>
                      <circle cx="12.222222222222221" cy="4.800185916317308" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.39615384615384613"></circle>
                      <circle cx="15.62962962962963" cy="4.78741848700112" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4115384615384615"></circle>
                      <circle cx="19.037037037037038" cy="4.7548087208561025" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4269230769230769"></circle>
                      <circle cx="22.444444444444443" cy="4.754794665034875" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4423076923076923"></circle>
                      <circle cx="25.85185185185185" cy="4.737014594085969" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.4576923076923077"></circle>
                      <circle cx="29.25925925925926" cy="4.742229411745812" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.47307692307692306"></circle>
                      <circle cx="32.66666666666667" cy="4.729867980917014" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.48846153846153845"></circle>
                      <circle cx="36.074074074074076" cy="4.721003117018296" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5038461538461538"></circle>
                      <circle cx="39.48148148148148" cy="4.7352929672309685" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5192307692307692"></circle>
                      <circle cx="42.888888888888886" cy="4.720965299875468" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5346153846153846"></circle>
                      <circle cx="46.2962962962963" cy="4.726737577387178" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.55"></circle>
                      <circle cx="49.7037037037037" cy="4.682096455364444" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5653846153846154"></circle>
                      <circle cx="53.111111111111114" cy="4.7240387111163" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5807692307692307"></circle>
                      <circle cx="56.51851851851852" cy="4.7228073929562475" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.5961538461538461"></circle>
                      <circle cx="59.925925925925924" cy="4.723613937777735" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6115384615384616"></circle>
                      <circle cx="63.333333333333336" cy="4.697896152313088" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6269230769230769"></circle>
                      <circle cx="66.74074074074075" cy="4.669798723864379" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6423076923076922"></circle>
                      <circle cx="70.14814814814815" cy="4.681003854853937" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6576923076923077"></circle>
                      <circle cx="73.55555555555556" cy="4.684521584578176" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6730769230769231"></circle>
                      <circle cx="76.96296296296296" cy="4.658580699361897" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.6884615384615385"></circle>
                      <circle cx="80.37037037037037" cy="4.6580172673466675" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7038461538461538"></circle>
                      <circle cx="83.77777777777777" cy="4.663308121654632" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7192307692307692"></circle>
                      <circle cx="87.18518518518519" cy="4.680293444563391" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.7346153846153847"></circle>
                      <circle cx="90.5925925925926" cy="4.718043591020024" r="1.5" fill="var(--muted-foreground)" fillOpacity="0.75"></circle>
                      <line x1="94" x2="94" y1="17.5" y2="8.961587544598785" stroke="var(--muted-foreground)" strokeOpacity="0.45" strokeWidth="1.25"></line>
                      <circle cx="94" cy="4.711587544598785" r="2.75" fill="var(--success)" stroke="var(--card)" strokeWidth="1.5" paint-order="stroke"></circle>
                    </svg>
                  </span>
                </HoverCardTrigger>
                </HoverCard>
              </ItemActions>
            </Item>
          </ItemGroup>
        </FramePanel>
      </Frame>
    </div>
  )
}
