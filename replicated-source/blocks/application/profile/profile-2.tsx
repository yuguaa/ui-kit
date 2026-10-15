import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-4xl space-y-6 w-full">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-px">
            <h1 className="capitalize font-semibold text-2xl tracking-tight">
              Admin Settings
            </h1>
            <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
              Manage your profile, workspace defaults, access, and connected tools.
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex gap-2 items-center shrink-0">
              <Button type="button" tabIndex="0" extracted="1">
                Cancel
              </Button>
              <Button type="button" tabIndex="0">
                Update
              </Button>
            </div>
          </div>
        </header>
        <Tabs className="gap-6 w-full" data-orientation="horizontal" activationDirection="none">
          <div className="py-2">
            <ScrollArea className="pb-2 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div className="min-w-max w-max whitespace-nowrap" role="presentation" style={{minWidth: "fit-content"}}>
                  <TabsList className="gap-6 h-auto justify-start min-w-max py-2 w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Admin settings sections">
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="" aria-controls="base-ui-_r_7_">
                      <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>
                        General
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                      <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>
                        Profile
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <span>
                        Members
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                      <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                      <span>
                        Permissions
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                      <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                      <span>
                        Notifications
                      </span>
                    </TabsTrigger>
                    <TabsTrigger className="flex-none gap-2 justify-start px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                      <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                      </svg>
                      <span>
                        Integrations
                      </span>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </ScrollArea>
          </div>
          <div className="min-w-0">
            <TabsContent className="min-w-0 mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_7_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_1_">
              <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-5">
                  <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 space-y-px">
                      <h2 className="capitalize font-semibold text-lg tracking-tight">
                        Workspace basics
                      </h2>
                      <p className="leading-relaxed text-muted-foreground text-sm">
                        Keep your workspace identity and invite defaults tidy.
                      </p>
                    </div>
                  </header>
                  <Card className="gap-0 p-0" size="default">
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          Workspace basics
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          Workspace naming, routing, and invite domain settings.
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-workspace-name">
                                  Workspace name
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Used in shared pages and invites.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Field role="group" data-orientation="vertical">
                                  <Input id="profile-2-workspace-name" value="Harbor Ops"></Input>
                                  <FieldDescription>
                                    Appears in invite flows and the workspace switcher.
                                  </FieldDescription>
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-workspace-domain">
                                  Workspace domain
                                </FieldLabel>
                                <Tooltip>
                                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Workspace domain info" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                  </svg>
                                </TooltipTrigger>
                                </Tooltip>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Connected
                                </Badge>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Keep the public URL short and clear.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Field role="group" data-orientation="vertical">
                                  <InputGroup role="group">
                                    <InputGroupAddon role="group" data-align="inline-start">
                                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                        workspace.de/
                                      </span>
                                    </InputGroupAddon>
                                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-2-workspace-domain" value="harbor-ops" />
                                  </InputGroup>
                                  <FieldDescription>
                                    New invite and share links will use this slug.
                                  </FieldDescription>
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-field-title items-center">
                                  Invite domains
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Allow signups from trusted company domains.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Field className="gap-3" role="group" data-orientation="vertical">
                                  <div className="flex flex-wrap gap-2 items-center w-full">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      harborops.app
                                      <Button className="hover:bg-transparent size-3" type="button" tabIndex="0" aria-label="Remove harborops.app">
                                        <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </Button>
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      clients.harborops.app
                                      <Button className="hover:bg-transparent size-3" type="button" tabIndex="0" aria-label="Remove clients.harborops.app">
                                        <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </Button>
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                      partnermail.co
                                      <Button className="hover:bg-transparent size-3" type="button" tabIndex="0" aria-label="Remove partnermail.co">
                                        <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path>
                                        </svg>
                                      </Button>
                                    </Badge>
                                    <Button className="[&_svg]:size-3.5" type="button" tabIndex="0">
                                      <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                      Add domain
                                    </Button>
                                  </div>
                                  <FieldDescription>
                                    Only trusted company domains are auto-approved for invites.
                                  </FieldDescription>
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-field-title items-center">
                                  Accent color
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Use one color for key status and links.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <div className="flex flex-wrap gap-2 items-center" role="radiogroup" aria-label="Accent color">
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Graphite" type="radio" value="graphite" name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(91, 97, 112)"}}></span>
                                  </label>
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Orange" type="radio" value="orange" name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(249, 115, 22)"}}></span>
                                  </label>
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Rose" type="radio" value="rose" name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(236, 72, 153)"}}></span>
                                  </label>
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Emerald" type="radio" value="emerald" checked name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(22, 163, 74)"}}></span>
                                  </label>
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Blue" type="radio" value="blue" name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(59, 130, 246)"}}></span>
                                  </label>
                                  <label className="cursor-pointer relative">
                                    <input className="peer sr-only" aria-label="Indigo" type="radio" value="indigo" name="profile-2-brand-accent" />
                                    <span className="border border-white/80 flex hover:ring-2 hover:ring-foreground/20 items-center justify-center peer-checked:ring-2 peer-checked:ring-foreground/70 peer-focus-visible:ring-2 peer-focus-visible:ring-foreground/70 ring-offset-2 ring-offset-background rounded-full shadow-sm size-6 transition-[box-shadow]" style={{backgroundColor: "rgb(99, 102, 241)"}}></span>
                                  </label>
                                </div>
                              </div>
                            </FieldContent>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
                <section className="flex flex-col gap-5">
                  <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 space-y-px">
                      <h2 className="capitalize font-semibold text-lg tracking-tight">
                        Regional preferences
                      </h2>
                      <p className="leading-relaxed text-muted-foreground text-sm">
                        Choose how dates, language, and time are displayed.
                      </p>
                    </div>
                  </header>
                  <Card className="gap-0 p-0" size="default">
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          Regional preferences
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          Localization and formatting preferences.
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="@md/field-group:gap-12 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-field-title items-center">
                                  Language and timezone
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Keep the workspace readable for the whole team.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <FieldGroup className="gap-3">
                                  <Field role="group" data-orientation="vertical">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-language">
                                      Language
                                    </FieldLabel>
                                    <Field role="group" data-orientation="vertical">
                                      <Select>
                                      <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="profile-2-language" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                        <SelectValue>
                                          <span className="flex flex-col gap-px items-start">
                                            <span className="font-medium">
                                              English
                                            </span>
                                            <small className="text-muted-foreground text-sm">
                                              Shared UI language
                                            </small>
                                          </span>
                                        </SelectValue>
                                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                          ▼
                                        </svg>
                                      </SelectTrigger>
                                      </Select>
                                      <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="en" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </Field>
                                    <FieldDescription>
                                      Sets shared UI copy for this workspace.
                                    </FieldDescription>
                                  </Field>
                                  <Field role="group" data-orientation="vertical">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-timezone">
                                      Timezone
                                    </FieldLabel>
                                    <Field role="group" data-orientation="vertical">
                                      <InputGroup className="cn-combobox-input" role="group">
                                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-2-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="(GMT+1) Berlin" />
                                        <InputGroupAddon role="group" data-align="inline-end">
                                          <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                            <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                              <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                          </button>
                                        </InputGroupAddon>
                                      </InputGroup>
                                      <input id="base-ui-_r_f_-hidden-input" tabIndex="-1" aria-hidden="true" value="(GMT+1) Berlin" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </Field>
                                    <FieldDescription>
                                      Used in summaries, reviews, and scheduled digests.
                                    </FieldDescription>
                                  </Field>
                                </FieldGroup>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-field-title items-center">
                                  Week start
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Match your planning cadence.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Field role="group" data-orientation="vertical">
                                  <Select>
                                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="profile-2-week-start" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Monday
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="monday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-field-title items-center">
                                  Date format
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Keep reports and summaries consistent.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Field role="group" data-orientation="vertical">
                                  <Field role="group" data-orientation="vertical">
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="profile-2-date-format" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        MM/DD/YYYY
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        ▼
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_n_-hidden-input" tabIndex="-1" aria-hidden="true" value="mdy" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                  <FieldDescription>
                                    Applies to exports, reports, and activity tables.
                                  </FieldDescription>
                                </Field>
                              </div>
                            </FieldContent>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
                <section className="flex flex-col gap-5">
                  <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 space-y-px">
                      <h2 className="capitalize font-semibold text-lg tracking-tight">
                        Editor behavior
                      </h2>
                      <p className="leading-relaxed text-muted-foreground text-sm">
                        Tighten small workflow defaults for daily operations.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Button className="px-0" href="https://help.harborops.app/workspace-editor" target="_blank" rel="noreferrer" role="button" tabIndex="0">
                        <svg className="lucide lucide-circle-question-mark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        Help Center
                      </Button>
                    </div>
                  </header>
                  <Card className="gap-0 p-0" size="default">
                    <CardContent className="p-0">
                      <FieldSet className="gap-0">
                        <FieldLegend className="sr-only" variant="legend">
                          Editor behavior
                        </FieldLegend>
                        <FieldDescription className="sr-only">
                          Keyboard and editor defaults.
                        </FieldDescription>
                        <FieldGroup className="gap-0">
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-send-enter" id="profile-2-send-enter-label">
                                  Send on Enter
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Post updates without opening a composer.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_q_" aria-checked="false" size="default" aria-labelledby="profile-2-send-enter-label">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                </Switch>
                                <input id="profile-2-send-enter" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-markdown" id="profile-2-markdown-label">
                                  Markdown shortcuts
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Expand formatting while you type.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_t_" aria-checked="true" size="default" aria-labelledby="profile-2-markdown-label">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="profile-2-markdown" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </FieldContent>
                          </Field>
                          <FieldSeparator content="false">
                            <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </FieldSeparator>
                          <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-4 px-5 py-4" role="group" data-orientation="responsive">
                            <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                              <div className="flex flex-wrap gap-2 items-center">
                                <FieldLabel className="capitalize cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-2-compact-tables" id="profile-2-compact-tables-label">
                                  Compact tables
                                </FieldLabel>
                              </div>
                              <FieldDescription className="leading-6 text-sm">
                                Fit more rows in planning views.
                              </FieldDescription>
                            </div>
                            <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 min-w-0 w-full">
                              <div className="flex justify-start w-full">
                                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_10_" aria-checked="true" size="default" aria-labelledby="profile-2-compact-tables-label">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                                </Switch>
                                <input id="profile-2-compact-tables" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </FieldContent>
                          </Field>
                        </FieldGroup>
                      </FieldSet>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
