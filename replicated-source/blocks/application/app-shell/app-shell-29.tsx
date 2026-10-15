import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
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
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
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
    <div className="bg-background flex flex-col lg:h-svh lg:min-h-0 min-h-svh text-foreground w-full">
      <h1 className="sr-only">
        {"Fleet console"}
      </h1>
      <div className="bg-accent/10 dark:bg-transparent flex flex-1 lg:pr-2 lg:py-2 min-h-0 w-full">
        <div className="duration-200 ease-linear group/rail h-full max-lg:hidden motion-reduce:transition-none overflow-hidden relative shrink-0 transition-[width] w-64" data-state="open">
          <div className="duration-200 group-data-[state=collapsed]/rail:opacity-0 group-data-[state=collapsed]/rail:pointer-events-none h-full motion-reduce:transition-none transition-opacity w-64">
            <aside className="flex flex-col gap-4 h-full px-4 py-4 w-full" aria-label="Fleet navigation">
              <div className="flex flex-col gap-4 shrink-0 w-full">
                <div className="flex h-8 items-center justify-between w-full">
                  <svg className="h-6 shrink-0 text-foreground w-16" viewBox="0 0 64 24" fill="none" role="img" aria-label="NeUI">
                    <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                    <path d="M16.8326 8.25504C17.4553 8.25504 17.9601 7.75023 17.9601 7.12752C17.9601 6.50481 17.4553 6 16.8326 6C16.2099 6 15.7051 6.50481 15.7051 7.12752C15.7051 7.75023 16.2099 8.25504 16.8326 8.25504Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.04004 13.651V7.12751C6.04004 6.50481 6.54485 6 7.16754 6C7.79027 6 8.29507 6.50481 8.29507 7.12751V13.651C8.29507 14.8074 9.23254 15.745 10.389 15.745H13.6105C14.7669 15.745 15.7045 14.8074 15.7045 13.651V10.4617C15.7045 9.83905 16.2093 9.33425 16.832 9.33425C17.4547 9.33425 17.9595 9.83905 17.9595 10.4617V13.651C17.9595 16.0529 16.0124 18 13.6105 18H10.389C7.98714 18 6.04004 16.0529 6.04004 13.651Z" fill="currentColor"></path>
                    <path d="M64 7.63423V16.3615H62.1612V7.63423H64Z" fill="currentColor"></path>
                    <path d="M56.4178 7.63423H58.2566V13.3018C58.2566 13.9382 58.1052 14.495 57.8022 14.9723C57.5021 15.4496 57.0817 15.8217 56.541 16.0888C56.0002 16.353 55.3703 16.4851 54.6512 16.4851C53.9293 16.4851 53.2979 16.353 52.7572 16.0888C52.2165 15.8217 51.796 15.4496 51.4959 14.9723C51.1959 14.495 51.0458 13.9382 51.0458 13.3018V7.63423H52.8846V13.1442C52.8846 13.4766 52.9568 13.772 53.1012 14.0305C53.2484 14.2891 53.4551 14.4922 53.7212 14.6399C53.9873 14.7876 54.2973 14.8615 54.6512 14.8615C55.0079 14.8615 55.3179 14.7876 55.5812 14.6399C55.8473 14.4922 56.0526 14.2891 56.197 14.0305C56.3442 13.772 56.4178 13.4766 56.4178 13.1442V7.63423Z" fill="currentColor"></path>
                    <path d="M41.3318 16.3615V7.63423H47.1922V9.15554H43.1706V11.2351H46.8907V12.7564H43.1706V14.8402H47.2092V16.3615H41.3318Z" fill="currentColor"></path>
                    <path d="M31.0923 16.3615V7.63423H34.5236C35.1804 7.63423 35.7409 7.75213 36.2052 7.98792C36.6724 8.22088 37.0277 8.55184 37.2712 8.98082C37.5175 9.40696 37.6406 9.90838 37.6406 10.4851C37.6406 11.0646 37.516 11.5632 37.2669 11.9808C37.0178 12.3956 36.6568 12.7138 36.184 12.9354C35.714 13.157 35.145 13.2678 34.4769 13.2678H32.1794V11.7848H34.1796C34.5306 11.7848 34.8223 11.7365 35.0544 11.6399C35.2866 11.5433 35.4592 11.3984 35.5725 11.2053C35.6886 11.0121 35.7466 10.772 35.7466 10.4851C35.7466 10.1953 35.6886 9.95099 35.5725 9.75213C35.4592 9.55326 35.2851 9.4027 35.0502 9.30042C34.818 9.19531 34.525 9.14275 34.1711 9.14275H32.9311V16.3615H31.0923ZM35.7891 12.3899L37.9506 16.3615H35.9207L33.8059 12.3899H35.7891Z" fill="currentColor"></path>
                  </svg>
                  <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Collapse navigation">
                    <svg className="lucide lucide-panel-left-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftCloseIcon" tabler="IconLayoutSidebarLeftCollapse" hugeicons="PanelLeftCloseIcon" phosphor="SidebarSimpleIcon" remixicon="RiSidebarFoldLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M9 3v18"></path>
                      <path d="m16 15-3-3 3-3"></path>
                    </svg>
                  </Button>
                </div>
                <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
                  <TabsList className="bg-input/30 h-7 inset-ring inset-ring-ring/20 p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                    <TabsTrigger className="dark:data-active:bg-background dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full not-data-active:hover:bg-input/50 px-2.5 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="">
                      {"Fleet"}
                    </TabsTrigger>
                    <TabsTrigger className="dark:data-active:bg-background dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full not-data-active:hover:bg-input/50 px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                      {"Team"}
                    </TabsTrigger>
                    <TabsTrigger className="dark:data-active:bg-background dark:data-active:border-ring/30 data-active:border-ring/50 data-active:shadow-xs h-full not-data-active:hover:bg-input/50 px-2.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                      {"Events"}
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-1 flex-col gap-4 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y w-full">
                <nav className="flex flex-col gap-2 w-full" aria-label="Sections">
                  <div className="flex gap-2 items-start w-full">
                    <button className="[&_svg]:transition-colors bg-background flex flex-1 flex-col font-medium gap-1.5 inset-ring inset-ring-ring/30 items-center justify-center leading-[14px] px-2 py-3 rounded-lg shadow-xs text-[10px] text-foreground transition-colors" type="button" aria-current="page">
                      <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span>
                        {"Overview"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-map size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                        <path d="M15 5.764v15"></path>
                        <path d="M9 3.236v15"></path>
                      </svg>
                      <span>
                        {"Live Map"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      <span>
                        {"Robots"}
                      </span>
                    </button>
                  </div>
                  <div className="flex gap-2 items-start w-full">
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-map-pinned size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                        <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                        <circle cx="12" cy="8" r="2"></circle>
                        <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                      </svg>
                      <span>
                        {"Zones"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-grid-2x2 lucide-grid2x2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Grid2x2Icon" tabler="IconBorderAll" hugeicons="Grid2X2Icon" phosphor="GridFourIcon" remixicon="RiLayoutGrid2Line" aria-hidden="true">
                        <path d="M12 3v18"></path>
                        <path d="M3 12h18"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      </svg>
                      <span>
                        {"Clusters"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>
                        {"Regions"}
                      </span>
                    </button>
                  </div>
                  <div className="flex gap-2 items-start w-full">
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-square-dashed-mouse-pointer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareDashedMousePointerIcon" tabler="IconLayersSelected" hugeicons="SquareMousePointerIcon" phosphor="SelectionIcon" remixicon="RiCursorLine" aria-hidden="true">
                        <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2"></path>
                        <path d="M19 3a2 2 0 0 1 2 2"></path>
                        <path d="M5 21a2 2 0 0 1-2-2"></path>
                        <path d="M9 3h1"></path>
                        <path d="M9 21h2"></path>
                        <path d="M14 3h1"></path>
                        <path d="M3 9v1"></path>
                        <path d="M21 9v2"></path>
                        <path d="M3 14v1"></path>
                      </svg>
                      <span>
                        {"Data Sync"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg text-[10px] text-muted-foreground transition-colors" type="button">
                      <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                      <span>
                        {"Endpoints"}
                      </span>
                    </button>
                    <button className="[&_svg]:text-ring [&_svg]:transition-colors bg-input/30 dark:inset-ring-input/30 flex flex-1 flex-col font-medium gap-1.5 gap-2 hover:[&_svg]:text-foreground hover:bg-input/50 hover:text-foreground inset-ring inset-ring-input/50 items-center justify-center leading-[14px] px-2 py-3 rounded-lg self-stretch text-[10px] text-muted-foreground transition-colors" type="button" aria-label="Add section">
                      <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>
                </nav>
                <nav className="flex flex-col w-full" aria-label="Robot Network">
                  <div className="flex gap-2 items-center pb-1 w-full">
                    <span className="font-medium text-ring text-xs">
                      {"Robot Network"}
                    </span>
                  </div>
                  <Collapsible data-open="">
                    <div className="flex gap-1.5 h-8 items-center w-full">
                      <Collapsible>
                      <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_3_" aria-expanded="true">
                        <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground text-ring transition-colors">
                          <svg className="lucide lucide-combine size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CombineIcon" tabler="IconLayersIntersect" hugeicons="CombineIcon" phosphor="IntersectSquareIcon" remixicon="RiShapesLine" aria-hidden="true">
                            <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
                            <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
                            <path d="m7 15 3 3"></path>
                            <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2"></path>
                            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"Service Pools"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/20 dark:border-transparent dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 min-w-4.5 outline-none pl-1 pr-1.5 px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                        <svg className="lucide lucide-shield-check size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        {"Stable"}
                      </Badge>
                    </div>
                    <CollapsibleContent data-open="" id="base-ui-_r_3_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                      <Collapsible data-closed="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Delivery"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"42"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <Button className="hover:text-foreground text-ring" type="button" tabIndex="0" aria-label="Add to Delivery">
                            <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </Button>
                        </div>
                      </Collapsible>
                      <Collapsible data-open="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_5_" aria-expanded="true">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Inspection"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"18"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <Button className="font-normal h-5 hover:bg-transparent hover:text-foreground px-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Review Inspection" role="button" tabIndex="0">
                            {"Review"}
                          </Button>
                        </div>
                        <CollapsibleContent data-open="" id="base-ui-_r_5_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                          <div className="flex gap-1.5 h-7 items-center w-full">
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <button className="-ml-2 dark:hover:bg-input/30 flex flex-1 font-medium gap-1.5 h-full hover:bg-accent/50 hover:text-foreground items-center min-w-0 px-2 rounded-md text-muted-foreground text-xs transition-colors" type="button">
                              <span className="bg-ring rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Overview"}
                              </span>
                            </button>
                          </div>
                          <div className="flex gap-1.5 h-7 items-center w-full">
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <button className="-ml-2 bg-accent dark:bg-input/50 flex flex-1 font-medium gap-2 h-full items-center min-w-0 px-2 rounded-md text-foreground text-xs transition-colors" type="button" aria-current="page">
                              <span className="bg-foreground rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Scheduled"}
                              </span>
                            </button>
                          </div>
                          <div className="flex gap-1.5 h-7 items-center w-full">
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <button className="-ml-2 dark:hover:bg-input/30 flex flex-1 font-medium gap-1.5 h-full hover:bg-accent/50 hover:text-foreground items-center min-w-0 px-2 rounded-md text-muted-foreground text-xs transition-colors" type="button">
                              <span className="bg-ring rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Findings"}
                              </span>
                            </button>
                          </div>
                          <div className="flex gap-1.5 h-7 items-center w-full">
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                              <span className="bg-border h-full w-px"></span>
                            </span>
                            <button className="-ml-2 dark:hover:bg-input/30 flex flex-1 font-medium gap-1.5 h-full hover:bg-accent/50 hover:text-foreground items-center min-w-0 px-2 rounded-md text-muted-foreground text-xs transition-colors" type="button">
                              <span className="bg-ring rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Completed"}
                              </span>
                            </button>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      <Collapsible data-closed="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Maintenance"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"11"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/20 border border-transparent dark:bg-warning/20 dark:border-transparent dark:text-warning-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-4 min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                            {"2 offline"}
                          </Badge>
                        </div>
                      </Collapsible>
                      <Collapsible data-closed="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Transfer"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"27"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                        </div>
                      </Collapsible>
                      <Collapsible data-closed="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Patrol"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"16"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/20 dark:border-transparent dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-4 min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            {"Live"}
                          </Badge>
                        </div>
                      </Collapsible>
                      <Collapsible data-closed="">
                        <div className="flex gap-1.5 h-8 items-center w-full">
                          <span className="flex h-full items-center justify-center shrink-0 w-3.5" aria-hidden="true">
                            <span className="bg-border h-full w-px"></span>
                          </span>
                          <Collapsible>
                          <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate">
                              {"Standby"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-foreground transition-shadow">
                              {"37"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-500/20 border border-transparent dark:bg-blue-500/20 dark:border-transparent dark:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-4 min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-blue-900 transition-shadow">
                            {"All Ready"}
                          </Badge>
                        </div>
                      </Collapsible>
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible data-closed="">
                    <div className="flex gap-1.5 h-8 items-center w-full">
                      <Collapsible>
                      <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                        <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground text-ring transition-colors">
                          <svg className="lucide lucide-land-plot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandPlotIcon" tabler="IconPolygon" hugeicons="LandPlotIcon" phosphor="PolygonIcon" remixicon="RiMapPinRangeLine" aria-hidden="true">
                            <path d="m12 8 6-3-6-3v10"></path>
                            <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"></path>
                            <path d="m6.49 12.85 11.02 6.3"></path>
                            <path d="M17.51 12.85 6.5 19.15"></path>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"Stations & Hubs"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Button className="font-normal h-5 hover:bg-transparent hover:text-foreground px-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Add Stations & Hubs" role="button" tabIndex="0">
                        {"Add"}
                      </Button>
                    </div>
                  </Collapsible>
                  <Collapsible data-closed="">
                    <div className="flex gap-1.5 h-8 items-center w-full">
                      <Collapsible>
                      <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                        <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground text-ring transition-colors">
                          <svg className="lucide lucide-list-todo size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListTodoIcon" tabler="IconChecklist" hugeicons="CheckListIcon" phosphor="ListChecksIcon" remixicon="RiTodoLine" aria-hidden="true">
                            <path d="M13 5h8"></path>
                            <path d="M13 12h8"></path>
                            <path d="M13 19h8"></path>
                            <path d="m3 17 2 2 4-4"></path>
                            <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"Dispatch Queues"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </div>
                  </Collapsible>
                  <Collapsible data-closed="">
                    <div className="flex gap-1.5 h-8 items-center w-full">
                      <Collapsible>
                      <CollapsibleTrigger className="data-[panel-open]:text-foreground flex flex-1 font-medium gap-1.5 group/row hover:text-foreground items-center min-w-0 text-muted-foreground text-xs transition-colors" type="button" tabIndex="0" aria-disabled="false" aria-expanded="false">
                        <svg className="group-data-[panel-open]/row:rotate-90 group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground lucide lucide-chevron-right shrink-0 size-3.5 text-ring transition-colors transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                        <span className="group-data-[panel-open]/row:text-foreground group-hover/row:text-foreground text-ring transition-colors">
                          <svg className="lucide lucide-network size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="NetworkIcon" tabler="IconSitemap" hugeicons="HierarchySquare01Icon" phosphor="TreeStructureIcon" remixicon="RiOrganizationChart" aria-hidden="true">
                            <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                            <path d="M12 12V8"></path>
                          </svg>
                        </span>
                        <span className="truncate">
                          {"Connectivity Tiers"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Button className="font-normal h-5 hover:bg-transparent hover:text-foreground px-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Manage Connectivity Tiers" role="button" tabIndex="0">
                        {"Manage"}
                      </Button>
                    </div>
                  </Collapsible>
                </nav>
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-clip-border bg-muted/50 border border-input/50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2 group/button h-10 hover:bg-muted inline-flex items-center justify-start outline-none px-2 py-2 rounded-lg select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Operator menu" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                <Avatar className="after:rounded-md rounded-md" size="sm">
                  <AvatarImage className="rounded-md" alt="Shadcn" src="https://github.com/shadcn.png"></AvatarImage>
                </Avatar>
                <span className="flex flex-1 flex-col gap-0.5 min-w-0 text-left">
                  <span className="font-medium leading-none text-sidebar-accent-foreground text-xs truncate">
                    {"Shadcn"}
                  </span>
                  <span className="font-normal leading-none text-[10px] text-muted-foreground truncate">
                    {"Author of Shadcn/ui"}
                  </span>
                </span>
                <svg className="lucide lucide-chevrons-up-down text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </aside>
          </div>
          <div className="absolute duration-200 group-data-[state=collapsed]/rail:opacity-100 group-data-[state=collapsed]/rail:pointer-events-auto inset-y-0 motion-reduce:transition-none opacity-0 pointer-events-none start-0 transition-opacity w-12" inert="">
            <div className="flex flex-col gap-4 h-full px-2 py-4 w-12">
              <div className="flex flex-col items-center shrink-0">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 size-8 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand navigation" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-panel-left-open size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftOpenIcon" tabler="IconLayoutSidebarLeftExpand" hugeicons="PanelLeftOpenIcon" phosphor="SidebarIcon" remixicon="RiSidebarUnfoldLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                    <path d="m14 9 3 3-3 3"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center min-h-0 no-scrollbar overflow-y-auto scroll-fade-y">
                <nav className="flex flex-col gap-2 items-center" aria-label="Sections">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-background cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex inset-ring inset-ring-ring/30 items-center justify-center outline-none p-0 rounded-lg select-none shadow-xs shrink-0 size-8 text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Overview" aria-current="page" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Live Map" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-map size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                      <path d="M15 5.764v15"></path>
                      <path d="M9 3.236v15"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Robots" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zones" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-map-pinned size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                      <circle cx="12" cy="8" r="2"></circle>
                      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Clusters" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-grid-2x2 lucide-grid2x2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Grid2x2Icon" tabler="IconBorderAll" hugeicons="Grid2X2Icon" phosphor="GridFourIcon" remixicon="RiLayoutGrid2Line" aria-hidden="true">
                      <path d="M12 3v18"></path>
                      <path d="M3 12h18"></path>
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Regions" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Data Sync" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-square-dashed-mouse-pointer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareDashedMousePointerIcon" tabler="IconLayersSelected" hugeicons="SquareMousePointerIcon" phosphor="SelectionIcon" remixicon="RiCursorLine" aria-hidden="true">
                      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                      <path d="M5 3a2 2 0 0 0-2 2"></path>
                      <path d="M19 3a2 2 0 0 1 2 2"></path>
                      <path d="M5 21a2 2 0 0 1-2-2"></path>
                      <path d="M9 3h1"></path>
                      <path d="M9 21h2"></path>
                      <path d="M14 3h1"></path>
                      <path d="M3 9v1"></path>
                      <path d="M21 9v2"></path>
                      <path d="M3 14v1"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 bg-input/30 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:inset-ring-input/30 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/50 hover:text-foreground inline-flex inset-ring inset-ring-input/50 items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Endpoints" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <line x1="8" x2="16" y1="21" y2="21"></line>
                      <line x1="12" x2="12" y1="17" y2="21"></line>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </nav>
              </div>
              <div className="flex h-10 items-center justify-center shrink-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-clip-border bg-muted/50 border border-input/50 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-muted inline-flex items-center justify-center outline-none p-0 rounded-lg select-none shrink-0 size-8 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Operator menu" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                  <Avatar className="after:rounded-md rounded-md" size="sm">
                    <AvatarImage className="rounded-md" alt="Shadcn" src="https://github.com/shadcn.png"></AvatarImage>
                  </Avatar>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        <main className="after:absolute after:inset-0 after:inset-ring after:inset-ring-ring/20 after:pointer-events-none after:rounded-xl bg-accent/10 flex flex-1 h-full max-lg:after:hidden max-lg:h-auto max-lg:overflow-visible max-lg:rounded-none min-h-0 min-w-0 overflow-clip relative rounded-xl">
          <div className="flex flex-1 flex-col gap-4 max-lg:overflow-visible min-h-0 min-w-0 overflow-y-auto px-4 py-4">
            <div className="flex gap-2 items-center lg:hidden">
              <Sheet>
              <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open navigation" baseUiClickTrigger="" id="base-ui-_r_1a_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-panel-left-open size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftOpenIcon" tabler="IconLayoutSidebarLeftExpand" hugeicons="PanelLeftOpenIcon" phosphor="SidebarIcon" remixicon="RiSidebarUnfoldLine" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="m14 9 3 3-3 3"></path>
                </svg>
              </SheetTrigger>
              </Sheet>
              <svg className="h-6 shrink-0 text-foreground w-16" viewBox="0 0 64 24" fill="none" role="img" aria-label="NeUI">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                <path d="M16.8326 8.25504C17.4553 8.25504 17.9601 7.75023 17.9601 7.12752C17.9601 6.50481 17.4553 6 16.8326 6C16.2099 6 15.7051 6.50481 15.7051 7.12752C15.7051 7.75023 16.2099 8.25504 16.8326 8.25504Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.04004 13.651V7.12751C6.04004 6.50481 6.54485 6 7.16754 6C7.79027 6 8.29507 6.50481 8.29507 7.12751V13.651C8.29507 14.8074 9.23254 15.745 10.389 15.745H13.6105C14.7669 15.745 15.7045 14.8074 15.7045 13.651V10.4617C15.7045 9.83905 16.2093 9.33425 16.832 9.33425C17.4547 9.33425 17.9595 9.83905 17.9595 10.4617V13.651C17.9595 16.0529 16.0124 18 13.6105 18H10.389C7.98714 18 6.04004 16.0529 6.04004 13.651Z" fill="currentColor"></path>
                <path d="M64 7.63423V16.3615H62.1612V7.63423H64Z" fill="currentColor"></path>
                <path d="M56.4178 7.63423H58.2566V13.3018C58.2566 13.9382 58.1052 14.495 57.8022 14.9723C57.5021 15.4496 57.0817 15.8217 56.541 16.0888C56.0002 16.353 55.3703 16.4851 54.6512 16.4851C53.9293 16.4851 53.2979 16.353 52.7572 16.0888C52.2165 15.8217 51.796 15.4496 51.4959 14.9723C51.1959 14.495 51.0458 13.9382 51.0458 13.3018V7.63423H52.8846V13.1442C52.8846 13.4766 52.9568 13.772 53.1012 14.0305C53.2484 14.2891 53.4551 14.4922 53.7212 14.6399C53.9873 14.7876 54.2973 14.8615 54.6512 14.8615C55.0079 14.8615 55.3179 14.7876 55.5812 14.6399C55.8473 14.4922 56.0526 14.2891 56.197 14.0305C56.3442 13.772 56.4178 13.4766 56.4178 13.1442V7.63423Z" fill="currentColor"></path>
                <path d="M41.3318 16.3615V7.63423H47.1922V9.15554H43.1706V11.2351H46.8907V12.7564H43.1706V14.8402H47.2092V16.3615H41.3318Z" fill="currentColor"></path>
                <path d="M31.0923 16.3615V7.63423H34.5236C35.1804 7.63423 35.7409 7.75213 36.2052 7.98792C36.6724 8.22088 37.0277 8.55184 37.2712 8.98082C37.5175 9.40696 37.6406 9.90838 37.6406 10.4851C37.6406 11.0646 37.516 11.5632 37.2669 11.9808C37.0178 12.3956 36.6568 12.7138 36.184 12.9354C35.714 13.157 35.145 13.2678 34.4769 13.2678H32.1794V11.7848H34.1796C34.5306 11.7848 34.8223 11.7365 35.0544 11.6399C35.2866 11.5433 35.4592 11.3984 35.5725 11.2053C35.6886 11.0121 35.7466 10.772 35.7466 10.4851C35.7466 10.1953 35.6886 9.95099 35.5725 9.75213C35.4592 9.55326 35.2851 9.4027 35.0502 9.30042C34.818 9.19531 34.525 9.14275 34.1711 9.14275H32.9311V16.3615H31.0923ZM35.7891 12.3899L37.9506 16.3615H35.9207L33.8059 12.3899H35.7891Z" fill="currentColor"></path>
              </svg>
            </div>
            <InputGroup className="bg-background dark:bg-input/30" role="group">
              <InputGroupAddon className="pl-2.5" role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_1b_" placeholder="Search" aria-label="Search the workspace" />
              <InputGroupAddon className="has-[>kbd]:mr-0 pr-2.5" role="group" data-align="inline-end">
                <Kbd className="rounded-md">
                  {"⌘F"}
                </Kbd>
              </InputGroupAddon>
            </InputGroup>
            <div className="gap-4 grid lg:grid-cols-3 sm:grid-cols-2 w-full">
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[148px] py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="bg-card border-b border-border h-[108px] rounded-b-xl"></CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[148px] py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="bg-card border-b border-border h-[108px] rounded-b-xl"></CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[148px] py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="bg-card border-b border-border h-[108px] rounded-b-xl"></CardContent>
              </Card>
            </div>
            <div className="gap-4 grid lg:grid-cols-3 sm:grid-cols-2 w-full">
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl h-[292px] relative ring-0 shadow-xs" size="default" aria-hidden="true">
                <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
