import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Spinner } from "@/registry/bases/base/ui/spinner"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex justify-center lg:px-8 min-h-svh px-4 py-6 sm:px-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"User profile form"}
      </h1>
      <form className="flex flex-col gap-6 max-w-6xl w-full" id="form-5-user-profile">
        <header className="flex flex-col gap-5">
          <Button className="px-0 w-fit" type="button" tabIndex={0}>
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {"Users"}
          </Button>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3 items-center min-w-0">
              <Avatar className="size-14" size="default">
                <AvatarImage alt="Iris Kwon" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap gap-2 items-center min-w-0">
                  <h2 className="font-semibold leading-tight text-2xl tracking-tight">
                    {"Iris Kwon"}
                  </h2>
                </div>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm">
                  <span>
                    {"Product operations lead"}
                  </span>
                  <span className="bg-gray-400 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Active today"}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Profile payload preview" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                  <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile actions" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={12} cy={5} r={1}></circle>
                  <circle cx={12} cy={19} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button type="submit" tabIndex={0} form="form-5-user-profile">
                <svg className="lucide lucide-save" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SaveIcon" tabler="IconDeviceFloppy" hugeicons="FloppyDiskIcon" phosphor="FloppyDiskIcon" remixicon="RiSaveLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                {"Save Profile"}
              </Button>
            </div>
          </div>
        </header>
        <Tabs className="gap-6" data-orientation="horizontal" activationDirection="none">
          <ScrollArea className="[&>[data-slot=scroll-area-scrollbar][data-orientation=vertical]]:hidden w-full whitespace-nowrap" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
            <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
              <div className="min-w-max w-max">
                <TabsList className="gap-6 h-auto justify-start min-w-max py-2 w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Profile form sections">
                  <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_8_" compositeItemActive="" aria-controls="base-ui-_r_b_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                        <path d="m14.305 19.53.923-.382"></path>
                        <path d="m15.228 16.852-.923-.383"></path>
                        <path d="m16.852 15.228-.383-.923"></path>
                        <path d="m16.852 20.772-.383.924"></path>
                        <path d="m19.148 15.228.383-.923"></path>
                        <path d="m19.53 21.696-.382-.924"></path>
                        <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                        <path d="m20.772 16.852.924-.383"></path>
                        <path d="m20.772 19.148.924.383"></path>
                        <circle cx={10} cy={8} r={5}></circle>
                        <circle cx={18} cy={18} r={3}></circle>
                      </svg>
                    </span>
                    <span>
                      {"Profile"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_9_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                    </span>
                    <span>
                      {"Organizations"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_a_">
                    <span className="[&_svg]:size-4">
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <span>
                      {"Security"}
                    </span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </ScrollArea>
          <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_b_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_8_">
            <div className="gap-6 grid lg:grid-cols-[minmax(0,1fr)_18rem] min-w-0">
              <div className="flex flex-col gap-7 min-w-0">
                <section className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h2 className="font-semibold text-base">
                        {"User Activity"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {"A lightweight trace of recent profile and workspace activity."}
                      </p>
                    </div>
                    <div className="flex justify-end shrink-0 sm:ml-auto sm:w-auto w-full">
                      <div className="w-28">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-5-activity-year" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"2026"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_c_-hidden-input" tabIndex={-1} aria-hidden="true" value="2026" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </div>
                  </div>
                  <Card className="gap-0 p-0" size="default">
                    <CardContent className="p-5">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                          <Tooltip>
                          <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center leading-none rounded-sm text-muted-foreground text-sm" type="button" aria-label="Profile edits, workspace visits, and sign-in events were recorded on 41 days this year." id="base-ui-_r_g_" baseUiTooltipTrigger="">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"41 active days"}
                            </Badge>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center leading-none rounded-sm text-muted-foreground text-sm" type="button" aria-label="Wednesday: 14 activity events, including 5 workspace handoffs." id="base-ui-_r_i_" baseUiTooltipTrigger="">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              {"Apr 22"}
                            </Badge>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center leading-none rounded-sm text-muted-foreground text-sm" type="button" aria-label="Activity is refreshing from audit logs and identity-provider events." id="base-ui-_r_k_" baseUiTooltipTrigger="">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <Spinner className="lucide lucide-loader-circle size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading" aria-hidden="true">
                                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                              </Spinner>
                              {"Syncing"}
                            </Badge>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center leading-none rounded-sm text-muted-foreground text-sm" type="button" aria-label="Last completed profile activity sync from audit-log events." id="base-ui-_r_m_" baseUiTooltipTrigger="">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              {"Synced 20m ago"}
                            </Badge>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <div className="gap-1.5 grid grid-cols-[0.75rem_minmax(0,1fr)]">
                          <div className="gap-1 grid grid-rows-[repeat(7,0.75rem)] leading-none text-[9px] text-muted-foreground">
                            <span className="grid place-items-center size-3">
                              {"S"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"M"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"T"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"W"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"T"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"F"}
                            </span>
                            <span className="grid place-items-center size-3">
                              {"S"}
                            </span>
                          </div>
                          <ScrollArea className="min-w-0 pb-2" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "10px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="">
                            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_n_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "46px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                              <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                                <div className="flex flex-col gap-3 min-w-[50rem] w-max">
                                  <div className="auto-cols-[0.75rem] gap-1 grid grid-flow-col grid-rows-[repeat(7,0.75rem)]" aria-label="Profile activity heatmap">
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Sunday, Dec 28: 7 events" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Jan 28: 3 events" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Monday, Feb 9: 3 events" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, Feb 28: 3 events" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Thursday, Mar 5: 8 events" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Mar 11: 8 events" id="base-ui-_r_13_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Tuesday, Mar 24: 3 events" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Thursday, Mar 26: 14 events" id="base-ui-_r_17_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, Mar 27: 14 events" id="base-ui-_r_19_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, Mar 28: 14 events" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Sunday, Mar 29: 14 events" id="base-ui-_r_1d_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Tuesday, Mar 31: 3 events" id="base-ui-_r_1f_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Apr 22: 14 events" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, May 1: 3 events" id="base-ui-_r_1j_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, May 6: 3 events" id="base-ui-_r_1l_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Monday, May 11: 7 events" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Thursday, May 14: 14 events" id="base-ui-_r_1p_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, May 15: 14 events" id="base-ui-_r_1r_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, May 16: 14 events" id="base-ui-_r_1t_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, May 23: 7 events" id="base-ui-_r_1v_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Monday, Jun 1: 3 events" id="base-ui-_r_21_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Thursday, Jun 18: 3 events" id="base-ui-_r_23_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Thursday, Jul 2: 3 events" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Jul 8: 14 events" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, Jul 17: 8 events" id="base-ui-_r_29_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, Jul 31: 3 events" id="base-ui-_r_2b_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Sunday, Aug 2: 3 events" id="base-ui-_r_2d_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Tuesday, Aug 4: 8 events" id="base-ui-_r_2f_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Aug 26: 14 events" id="base-ui-_r_2h_" baseUiTooltipTrigger="">
                                      <span className="bg-primary block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Wednesday, Sep 2: 3 events" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, Sep 12: 3 events" id="base-ui-_r_2l_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Tuesday, Sep 22: 7 events" id="base-ui-_r_2n_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, Oct 3: 3 events" id="base-ui-_r_2p_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, Oct 16: 7 events" id="base-ui-_r_2r_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Sunday, Oct 25: 3 events" id="base-ui-_r_2t_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Tuesday, Nov 3: 3 events" id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Saturday, Nov 28: 8 events" id="base-ui-_r_31_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/50 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Friday, Dec 4: 3 events" id="base-ui-_r_33_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <Tooltip>
                                    <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring inline-flex outline-none rounded-md size-full" type="button" aria-label="Monday, Dec 7: 3 events" id="base-ui-_r_35_" baseUiTooltipTrigger="">
                                      <span className="bg-primary/20 block rounded-md size-full" aria-hidden="true"></span>
                                    </TooltipTrigger>
                                    </Tooltip>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                    <span className="bg-muted block rounded-md size-full" aria-hidden="true"></span>
                                  </div>
                                  <div className="grid grid-cols-12 leading-none text-muted-foreground text-xs">
                                    <span>
                                      {"Jan"}
                                    </span>
                                    <span>
                                      {"Feb"}
                                    </span>
                                    <span>
                                      {"Mar"}
                                    </span>
                                    <span>
                                      {"Apr"}
                                    </span>
                                    <span>
                                      {"May"}
                                    </span>
                                    <span>
                                      {"Jun"}
                                    </span>
                                    <span>
                                      {"Jul"}
                                    </span>
                                    <span>
                                      {"Aug"}
                                    </span>
                                    <span>
                                      {"Sep"}
                                    </span>
                                    <span>
                                      {"Oct"}
                                    </span>
                                    <span>
                                      {"Nov"}
                                    </span>
                                    <span className="text-end">
                                      {"Dec"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_n_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "736.6666666666666px"}}>
                              <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                            </div>
                            <div style={{position: "absolute", bottom: "0px", insetInlineEnd: "0px", width: "0px", height: "10px"}}></div>
                          </ScrollArea>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                <section className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h2 className="font-semibold text-base">
                        {"Personal Information"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {"Edit the identity shown across assignments and handoffs."}
                      </p>
                    </div>
                  </div>
                  <Card className="gap-0 p-0" size="default">
                    <CardContent className="p-0">
                      <FieldGroup className="gap-0">
                        <Field className="@md/field-group:gap-6 gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-field-title items-center">
                              {"Profile Image"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Used in mentions, activity rows, and directory previews."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                              <div className="relative shrink-0">
                                <Avatar className="size-16" size="default">
                                  <AvatarImage alt="Iris Kwon" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="flex flex-1 flex-col gap-2 min-w-0">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <div className="inline-flex relative">
                                    <Button type="button" tabIndex={0} aria-haspopup="dialog">
                                      <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                                        <path d="M12 3v12"></path>
                                        <path d="m17 8-5-5-5 5"></path>
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                      </svg>
                                      {"Replace image"}
                                    </Button>
                                    <input className="sr-only" id="form-5-avatar" accept="image/png,image/jpeg,image/webp" aria-label="Upload profile image" tabIndex={-1} type="file" />
                                  </div>
                                  <Button type="button" tabIndex={0}>
                                    {"Remove"}
                                  </Button>
                                </div>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"Recommended size 1:1. PNG, JPEG, or WebP up to 4MB."}
                                </p>
                              </div>
                            </div>
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-field-title items-center">
                              {"Name"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Keep legal and display naming aligned."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <FieldGroup className="gap-3 grid sm:grid-cols-2">
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-first-name">
                                  {"First Name"}
                                </FieldLabel>
                                <Input id="form-5-first-name" value="Iris"></Input>
                              </Field>
                              <Field className="gap-2" role="group" data-orientation="vertical">
                                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-last-name">
                                  {"Last Name"}
                                </FieldLabel>
                                <Input id="form-5-last-name" value="Kwon"></Input>
                              </Field>
                            </FieldGroup>
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-handle">
                              {"Public Handle"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Used for mentions, profile links, and compact owner labels."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <InputGroup role="group">
                              <InputGroupAddon role="group" data-align="inline-start">
                                <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                  {"@"}
                                </span>
                              </InputGroupAddon>
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-5-handle" value="iris-kwon" />
                            </InputGroup>
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-role">
                              {"Role"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Controls assignment labels and operational scope."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <Select>
                            <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-5-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"Product operations lead"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_39_-hidden-input" tabIndex={-1} aria-hidden="true" value="product-ops-lead" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-country">
                              {"Country"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Sets the regional profile context."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} id="form-5-country" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                              <span className="flex gap-2 items-center min-w-0">
                                <img className="rounded-xs shrink-0" alt="" width={16} height={12} src="https://flagcdn.com/ca.svg" style={{height: "auto"}} />
                                <span className="truncate">
                                  {"Canada"}
                                </span>
                              </span>
                              <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </ComboboxTrigger>
                            <input id="base-ui-_r_3c_-hidden-input" tabIndex={-1} aria-hidden="true" value="Canada" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-locale">
                              {"Locale"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Controls date, number, and interface formatting."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <Select>
                            <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-5-locale" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"English (Canada)"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_3f_-hidden-input" tabIndex={-1} aria-hidden="true" value="en-ca" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-timezone">
                              {"Time Zone"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Used for activity timestamps and notifications."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <Select>
                            <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-5-timezone" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"Eastern Time (UTC-5)"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_3i_-hidden-input" tabIndex={-1} aria-hidden="true" value="america-toronto" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-bio">
                              {"Bio"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Short internal context for admins and collaborators."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <Textarea className="min-h-24 resize-none" id="form-5-bio">
                              {"Coordinates launch approvals, customer handoffs, and product readiness across the Atlas Lane workspace."}
                            </Textarea>
                          </FieldContent>
                        </Field>
                        <Field className="@md/field-group:gap-6 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-5 py-4" role="group" data-orientation="responsive">
                          <div className="@md/field-group:basis-2/5 @md/field-group:pr-4 @md/field-group:w-2/5 flex flex-col gap-0.5 min-w-0">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-5-visibility">
                              {"Profile Visibility"}
                            </FieldLabel>
                            <FieldDescription className="text-balance">
                              {"Decide who can see extended profile details."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:basis-3/5 @md/field-group:w-3/5 min-w-0 w-full">
                            <Select>
                            <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-5-visibility" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"Visible to workspace"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_3l_-hidden-input" tabIndex={-1} aria-hidden="true" value="workspace" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </FieldContent>
                        </Field>
                      </FieldGroup>
                    </CardContent>
                  </Card>
                </section>
                <div className="flex flex-col gap-7">
                  <section className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h2 className="font-semibold text-base">
                          {"Email Addresses"}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {"Verified addresses used for sign-in and notifications."}
                        </p>
                      </div>
                      <div className="flex justify-end shrink-0 sm:ml-auto sm:w-auto w-full">
                        <Button type="button" tabIndex={0}>
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add Email"}
                        </Button>
                      </div>
                    </div>
                    <Card className="gap-0 p-0" size="default">
                      <CardContent className="p-0">
                        <div className="flex flex-col">
                          <Item className="px-5" variant="default" size="sm">
                            <ItemMedia variant="icon">
                              <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                              </svg>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                                <span className="min-w-0 truncate">
                                  {"iris.kwon@atlaslane.dev"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Primary"}
                                </Badge>
                                <Tooltip>
                                <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="iris.kwon@atlaslane.dev verification details" id="base-ui-_r_3p_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </ItemTitle>
                              <ItemDescription className="truncate">
                                {"Primary sign-in, recovery, and workspace notification email."}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="gap-3 shrink-0">
                              <span className="hidden sm:inline text-muted-foreground text-xs whitespace-nowrap">
                                {"Added 3h ago"}
                              </span>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for iris.kwon@atlaslane.dev" aria-haspopup="menu" id="base-ui-_r_3t_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={12} cy={5} r={1}></circle>
                                  <circle cx={12} cy={19} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                          </Item>
                          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          <Item className="px-5" variant="default" size="sm">
                            <ItemMedia variant="icon">
                              <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                              </svg>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                                <span className="min-w-0 truncate">
                                  {"launches@atlaslane.dev"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="truncate">
                                {"Shared launch review alias for customer-facing updates."}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="gap-3 shrink-0">
                              <span className="hidden sm:inline text-muted-foreground text-xs whitespace-nowrap">
                                {"Linked 2d ago"}
                              </span>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for launches@atlaslane.dev" aria-haspopup="menu" id="base-ui-_r_42_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={12} cy={5} r={1}></circle>
                                  <circle cx={12} cy={19} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                          </Item>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                  <section className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h2 className="font-semibold text-base">
                          {"Connected Accounts"}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {"Identity sources and public destinations linked to this user."}
                        </p>
                      </div>
                    </div>
                    <Card className="gap-0 p-0" size="default">
                      <CardContent className="p-0">
                        <div className="flex flex-col">
                          <Item className="px-5" variant="default" size="sm">
                            <ItemMedia variant="icon">
                              <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                <circle cx={16.5} cy={7.5} r=".5" fill="currentColor"></circle>
                              </svg>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                                <span className="min-w-0 truncate">
                                  {"Atlas Lane SSO"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                  {"Managed"}
                                </Badge>
                                <Tooltip>
                                <TooltipTrigger className="align-middle focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="Atlas Lane SSO verification details" id="base-ui-_r_45_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                              </ItemTitle>
                              <ItemDescription className="truncate">
                                {"SAML identity source with profile sync enabled."}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="gap-3 shrink-0">
                              <span className="hidden sm:inline text-muted-foreground text-xs whitespace-nowrap">
                                {"Synced 12m ago"}
                              </span>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Atlas Lane SSO" aria-haspopup="menu" id="base-ui-_r_49_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={12} cy={5} r={1}></circle>
                                  <circle cx={12} cy={19} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                          </Item>
                          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          <Item className="px-5" variant="default" size="sm">
                            <ItemMedia variant="icon">
                              <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                              </svg>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                                <span className="min-w-0 truncate">
                                  {"Customer docs portal"}
                                </span>
                              </ItemTitle>
                              <ItemDescription className="truncate">
                                {"Public author profile for changelogs and launch notes."}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="gap-3 shrink-0">
                              <span className="hidden sm:inline text-muted-foreground text-xs whitespace-nowrap">
                                {"Visible"}
                              </span>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Customer docs portal" aria-haspopup="menu" id="base-ui-_r_4e_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={12} cy={5} r={1}></circle>
                                  <circle cx={12} cy={19} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </ItemActions>
                          </Item>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </div>
              <aside className="flex flex-col gap-5 lg:self-start lg:sticky lg:top-6 min-w-0">
                <Card className="gap-0 p-0" size="default">
                  <CardHeader className="gap-1 px-4 py-4">
                    <CardTitle>
                      {"Audit Rail"}
                    </CardTitle>
                    <div className="text-muted-foreground text-sm">
                      {"Stable identifiers and profile timestamps."}
                    </div>
                  </CardHeader>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <CardContent className="p-0">
                    <Item className="px-4" variant="default" size="sm">
                      <ItemMedia variant="icon">
                        <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx={12} cy={7} r={4}></circle>
                        </svg>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center">
                          <span>
                            {"User ID"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="User ID: Stable identifier" id="base-ui-_r_4h_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemDescription>
                        <ItemTitle className="gap-1.5 min-w-0 w-full">
                          <span className="min-w-0 truncate">
                            {"usr_8R4m...KX92"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy User ID">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </ItemTitle>
                      </ItemContent>
                    </Item>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <Item className="px-4" variant="default" size="sm">
                      <ItemMedia variant="icon">
                        <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                        </svg>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center">
                          <span>
                            {"Primary Email"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="Primary Email: Verified contact" id="base-ui-_r_4j_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemDescription>
                        <ItemTitle className="gap-1.5 min-w-0 w-full">
                          <span className="min-w-0 truncate">
                            {"iris.kwon@atlaslane.dev"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy Primary Email">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </ItemTitle>
                      </ItemContent>
                    </Item>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <Item className="px-4" variant="default" size="sm">
                      <ItemMedia variant="icon">
                        <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                          <path d="M3 10h18"></path>
                          <path d="m9 16 2 2 4-4"></path>
                        </svg>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center">
                          <span>
                            {"User Since"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="User Since: Created by admin invite" id="base-ui-_r_4l_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemDescription>
                        <ItemTitle className="gap-1.5 min-w-0 w-full">
                          <span className="min-w-0 truncate">
                            {"March 18, 2026"}
                          </span>
                        </ItemTitle>
                      </ItemContent>
                    </Item>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <Item className="px-4" variant="default" size="sm">
                      <ItemMedia variant="icon">
                        <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                      </ItemMedia>
                      <ItemContent className="min-w-0">
                        <ItemDescription className="flex gap-1.5 items-center">
                          <span>
                            {"Profile Updated"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex rounded-sm shrink-0 text-muted-foreground" type="button" aria-label="Profile Updated: Identity sync complete" id="base-ui-_r_4n_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </ItemDescription>
                        <ItemTitle className="gap-1.5 min-w-0 w-full">
                          <span className="min-w-0 truncate">
                            {"Updated 3h ago"}
                          </span>
                        </ItemTitle>
                      </ItemContent>
                    </Item>
                  </CardContent>
                </Card>
                <Card className="gap-0 p-0" size="default">
                  <CardHeader className="gap-1 px-4 py-4">
                    <CardTitle>
                      {"Profile Health"}
                    </CardTitle>
                    <div className="text-muted-foreground text-sm">
                      {"Identity quality and access readiness."}
                    </div>
                  </CardHeader>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <CardContent className="flex flex-col gap-4 px-4 py-4">
                    <div className="flex gap-3 items-center justify-between">
                      <span className="font-medium text-sm">
                        {"Completion"}
                      </span>
                      <span className="font-medium text-sm">
                        {"92%"}
                      </span>
                    </div>
                    <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar" aria-label="Profile completion">
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {"Identity Sync"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          <Spinner className="lucide lucide-loader-circle size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading" aria-hidden="true">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                          </Spinner>
                          {"Syncing"}
                        </Badge>
                      </div>
                      <div className="flex gap-3 items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {"Access Review"}
                        </span>
                        <span className="font-medium">
                          {"Due May 02"}
                        </span>
                      </div>
                      <div className="flex gap-3 items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {"Recovery"}
                        </span>
                        <span className="font-medium">
                          {"Configured"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </main>
  )
}
