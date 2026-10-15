import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="max-w-[1320px] md:p-4 mx-auto p-3 w-full">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap gap-2.5 items-center">
              <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                Plans
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                3 live
              </Badge>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-muted-foreground text-sm">
              <span>
                5 plans
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="flex gap-1.5 items-center">
                <Avatar className="size-5" size="default">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <span>
                  Mara Whitfield
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  edited 14 min ago
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New plan
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
            <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
              Unsaved changes
            </AlertTitle>
            <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
              4 edits across the Scale and Enterprise plans are not published yet.
            </AlertDescription>
            <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
              <Button type="button" tabIndex="0">
                Discard
              </Button>
              <Button type="button" tabIndex="0">
                Save changes
              </Button>
            </AlertAction>
          </Alert>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
            <Frame className="h-full">
              <FramePanel className="flex flex-1 flex-col gap-4">
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="font-semibold text-foreground text-sm">
                        Starter
                      </h3>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Active
                      </Badge>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        PLAN-Starter
                      </span>
                    </div>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <svg className="lucide lucide-globe shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>
                        Public
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        1,840 subscribers
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Edit Starter details">
                    <svg className="lucide lucide-pencil opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    $29
                  </span>
                  <span className="text-muted-foreground text-sm">
                    per seat / mo
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Features
                  </h4>
                  <ItemGroup className="gap-0!" role="list">
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-users shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Seats
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            5 included
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              API calls
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            50k / month
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-database shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Storage
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            10 GB
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-layers shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Environments
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            1
                          </span>
                        </ItemActions>
                      </Item>
                    </div>
                  </ItemGroup>
                </div>
                <Button className="mt-auto" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add entitlement
                </Button>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    4 entitlements
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    0 add-ons
                  </span>
                </p>
              </FramePanel>
              <footer className="flex flex-col gap-2 p-3">
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_1_-label">
                  <span className="text-foreground">
                    Active
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" size="default" aria-label="Toggle Starter active" aria-labelledby="base-ui-_r_1_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_4_-label">
                  <span className="text-foreground">
                    Public
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="true" size="default" aria-label="Toggle Starter public" aria-labelledby="base-ui-_r_4_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
              </footer>
            </Frame>
            <Frame className="h-full">
              <FramePanel className="flex flex-1 flex-col gap-4">
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="font-semibold text-foreground text-sm">
                        Growth
                      </h3>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Active
                      </Badge>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        PLAN-Growth
                      </span>
                    </div>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <svg className="lucide lucide-globe shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>
                        Public
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        1,120 subscribers
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Edit Growth details">
                    <svg className="lucide lucide-pencil opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    $89
                  </span>
                  <span className="text-muted-foreground text-sm">
                    per seat / mo
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Features
                  </h4>
                  <ItemGroup className="gap-0!" role="list">
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-users shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Seats
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            20 included
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              API calls
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            500k / month
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-database shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Storage
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            100 GB
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-layers shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Environments
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            3
                          </span>
                        </ItemActions>
                      </Item>
                    </div>
                  </ItemGroup>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Add-ons
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2 items-center justify-between text-sm">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <svg className="lucide lucide-sparkles shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        <span className="truncate">
                          Usage insights
                        </span>
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        $19 / month
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="mt-auto" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add entitlement
                </Button>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    4 entitlements
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    1 add-on
                  </span>
                </p>
              </FramePanel>
              <footer className="flex flex-col gap-2 p-3">
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_9_-label">
                  <span className="text-foreground">
                    Active
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_8_" aria-checked="true" size="default" aria-label="Toggle Growth active" aria-labelledby="base-ui-_r_9_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_9_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_c_-label">
                  <span className="text-foreground">
                    Public
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" size="default" aria-label="Toggle Growth public" aria-labelledby="base-ui-_r_c_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
              </footer>
            </Frame>
            <Frame className="h-full">
              <FramePanel className="flex flex-1 flex-col gap-4">
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="font-semibold text-foreground text-sm">
                        Scale
                      </h3>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Active
                      </Badge>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        PLAN-Scale
                      </span>
                    </div>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <svg className="lucide lucide-globe shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>
                        Public
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        214 subscribers
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Edit Scale details">
                    <svg className="lucide lucide-pencil opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    $249
                  </span>
                  <span className="text-muted-foreground text-sm">
                    per seat / mo
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Features
                  </h4>
                  <ItemGroup className="gap-0!" role="list">
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-users shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Seats
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            100 included
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              API calls
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            5M / month
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-database shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Storage
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            1 TB
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-layers shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Environments
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            10
                          </span>
                        </ItemActions>
                      </Item>
                    </div>
                  </ItemGroup>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Add-ons
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2 items-center justify-between text-sm">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          SSO and SAML
                        </span>
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        $99 / month
                      </span>
                    </div>
                    <div className="flex gap-2 items-center justify-between text-sm">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <svg className="lucide lucide-sparkles shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        <span className="truncate">
                          Usage insights
                        </span>
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        $19 / month
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="mt-auto" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add entitlement
                </Button>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    4 entitlements
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    2 add-ons
                  </span>
                </p>
              </FramePanel>
              <footer className="flex flex-col gap-2 p-3">
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_h_-label">
                  <span className="text-foreground">
                    Active
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_g_" aria-checked="true" size="default" aria-label="Toggle Scale active" aria-labelledby="base-ui-_r_h_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_h_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_k_-label">
                  <span className="text-foreground">
                    Public
                  </span>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_j_" aria-checked="true" size="default" aria-label="Toggle Scale public" aria-labelledby="base-ui-_r_k_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_k_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
              </footer>
            </Frame>
            <Frame className="h-full">
              <FramePanel className="flex flex-1 flex-col gap-4">
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="font-semibold text-foreground text-sm">
                        Enterprise
                      </h3>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        Draft
                      </Badge>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        PLAN-Enterprise
                      </span>
                    </div>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <svg className="lucide lucide-lock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span>
                        Private
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        0 subscribers
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Edit Enterprise details">
                    <svg className="lucide lucide-pencil opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    $1,200
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / mo
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Features
                  </h4>
                  <ItemGroup className="gap-0!" role="list">
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-users shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Seats
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            Unlimited
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              API calls
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            50M / month
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-database shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Storage
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            10 TB
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-layers shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Environments
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            Unlimited
                          </span>
                        </ItemActions>
                      </Item>
                    </div>
                  </ItemGroup>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Add-ons
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-2 items-center justify-between text-sm">
                      <span className="flex gap-1.5 items-center min-w-0">
                        <svg className="lucide lucide-shield-check shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          SSO and SAML
                        </span>
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">
                        Included
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="mt-auto" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add entitlement
                </Button>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    4 entitlements
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    1 add-on
                  </span>
                </p>
              </FramePanel>
              <footer className="flex flex-col gap-2 p-3">
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_p_-label">
                  <span className="text-foreground">
                    Active
                  </span>
                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" size="default" aria-label="Toggle Enterprise active" aria-labelledby="base-ui-_r_p_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_p_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_s_-label">
                  <span className="text-foreground">
                    Public
                  </span>
                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" size="default" aria-label="Toggle Enterprise public" aria-labelledby="base-ui-_r_s_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_s_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
              </footer>
            </Frame>
            <Frame className="h-full opacity-80">
              <FramePanel className="flex flex-1 flex-col gap-4">
                <div className="flex gap-3 items-start justify-between">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="font-semibold text-foreground text-sm">
                        Team Legacy
                      </h3>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                        Archived
                      </Badge>
                      <span className="tabular-nums text-muted-foreground text-xs">
                        PLAN-Team-Legacy
                      </span>
                    </div>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <svg className="lucide lucide-lock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span>
                        Private
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        38 subscribers
                      </span>
                    </div>
                  </div>
                  <Button type="button" tabIndex="0" aria-label="Edit Team Legacy details">
                    <svg className="lucide lucide-pencil opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="font-semibold tabular-nums text-2xl text-foreground">
                    $59
                  </span>
                  <span className="text-muted-foreground text-sm">
                    per seat / mo
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-muted-foreground text-xs">
                    Features
                  </h4>
                  <ItemGroup className="gap-0!" role="list">
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-users shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Seats
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            10 included
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-zap shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              API calls
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            250k / month
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-database shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Storage
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            50 GB
                          </span>
                        </ItemActions>
                      </Item>
                      <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                    </div>
                    <div className="contents">
                      <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                        <ItemMedia variant="default">
                          <svg className="lucide lucide-layers shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="min-w-0 w-full">
                            <span className="font-medium leading-5 text-sm truncate">
                              Environments
                            </span>
                          </ItemTitle>
                        </ItemContent>
                        <ItemActions className="shrink-0">
                          <span className="leading-5 tabular-nums text-muted-foreground text-sm">
                            2
                          </span>
                        </ItemActions>
                      </Item>
                    </div>
                  </ItemGroup>
                </div>
                <Button className="mt-auto" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add entitlement
                </Button>
                <p className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                  <span>
                    4 entitlements
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    0 add-ons
                  </span>
                </p>
              </FramePanel>
              <footer className="flex flex-col gap-2 p-3">
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_11_-label">
                  <span className="text-foreground">
                    Active
                  </span>
                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_10_" aria-checked="false" size="default" aria-label="Toggle Team Legacy active" aria-labelledby="base-ui-_r_11_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_11_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
                <label className="flex gap-2 items-center justify-between text-sm" id="base-ui-_r_14_-label">
                  <span className="text-foreground">
                    Public
                  </span>
                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_13_" aria-checked="false" size="default" aria-label="Toggle Team Legacy public" aria-labelledby="base-ui-_r_14_-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_14_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </label>
              </footer>
            </Frame>
          </div>
        </div>
      </div>
    </div>
  )
}
