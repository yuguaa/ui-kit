import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/bases/base/ui/field"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-4xl space-y-8 w-full">
        <header className="flex flex-wrap gap-4 items-center px-1">
          <Avatar className="border size-14" size="default">
            <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
          </Avatar>
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="font-semibold text-xl tracking-tight">
                {"Nora Vale"}
              </h1>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"Active"}
              </Badge>
            </div>
            <p className="flex gap-1.5 items-center text-muted-foreground text-sm truncate">
              <span className="truncate">
                {"nora.vale@acmecloud.com"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="truncate">
                {"Product, Design"}
              </span>
            </p>
          </div>
        </header>
        <Tabs className="gap-5 lg:gap-8 w-full" data-orientation="vertical" activationDirection="none">
          <div className="min-w-0 shrink-0 w-44">
            <TabsList className="flex-col h-auto items-stretch p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger className="bg-muted! gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_5_" extracted="1">
                <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx={9} cy={7} r={4}></circle>
                </svg>
                <span className="truncate">
                  {"Access"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="truncate">
                  {"Authentication"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                <svg className="lucide lucide-monitor" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                  <rect width={20} height={14} x={2} y={3} rx={2}></rect>
                  <line x1={8} x2={16} y1={21} y2={21}></line>
                  <line x1={12} x2={12} y1={17} y2={21}></line>
                </svg>
                <span className="truncate">
                  {"Sessions"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                  <path d="M13 5h8"></path>
                  <path d="M13 12h8"></path>
                  <path d="M13 19h8"></path>
                  <path d="m3 17 2 2 4-4"></path>
                  <path d="m3 7 2 2 4-4"></path>
                </svg>
                <span className="truncate">
                  {"Activity"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_">
                <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                  <path d="M3 6h18"></path>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <span className="truncate">
                  {"Danger zone"}
                </span>
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex-1 min-w-0">
            <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_5_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_0_">
              <div className="space-y-4">
                <Frame className="text-foreground" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="capitalize font-semibold text-sm">
                      {"Roles & Teams"}
                    </div>
                    <div className="dark:text-foreground/70 flex gap-1.5 items-center text-muted-foreground text-sm">
                      <span>
                        {"2 roles"}
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"2 teams assigned"}
                      </span>
                    </div>
                  </header>
                  <FramePanel className="p-0">
                    <FieldGroup className="gap-0">
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="access-role">
                              <span className="capitalize">
                                {"Roles"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Member plus a custom role."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Select>
                            <SelectTrigger className="w-full" type="button" tabIndex={0} id="access-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"Member"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_6_-hidden-input" tabIndex={-1} aria-hidden="true" value="member" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Assigned roles"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Applied on every sign-in."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 max-w-none min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <div className="flex flex-wrap gap-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                                {"Member"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                {"Support Agent"}
                              </Badge>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="access-team">
                              <span className="capitalize">
                                {"Team"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Add Nora to a team."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Select>
                            <SelectTrigger className="w-full" type="button" tabIndex={0} id="access-team" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"Product"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_9_-hidden-input" tabIndex={-1} aria-hidden="true" value="product" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Teams"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Drives default access scopes."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 max-w-none min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <div className="flex flex-wrap gap-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Product"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Design"}
                              </Badge>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="vertical">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Permission scopes"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Resolved from roles and teams."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 max-w-none min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <div className="flex flex-wrap gap-1.5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Members, Read"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Billing, None"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Audit log, Read"}
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Settings, Write"}
                              </Badge>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </FramePanel>
                  <footer className="flex flex-row gap-2 items-center justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <Button type="button" tabIndex={0}>
                      {"Add role"}
                    </Button>
                    <Button type="button" disabled="" tabIndex={0} disabled>
                      {"Save access"}
                    </Button>
                  </footer>
                </Frame>
                <Frame className="text-foreground" spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="capitalize font-semibold text-sm">
                      {"Effective access"}
                    </div>
                    <div className="dark:text-foreground/70 text-muted-foreground text-sm">
                      {"What this member can reach today."}
                    </div>
                  </header>
                  <FramePanel className="space-y-3">
                    <div className="space-y-3">
                      <div className="space-y-3">
                        <div className="flex gap-3 items-start justify-between">
                          <div className="min-w-0">
                            <p className="text-muted-foreground text-xs">
                              {"Effective access"}
                            </p>
                            <p className="font-medium mt-1 text-sm">
                              {"Read across Members and Audit log"}
                            </p>
                            <p className="leading-5 mt-1 text-muted-foreground text-sm">
                              {"Inherited from the Member role and the Product team."}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Read"}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div className="flex gap-3 items-start justify-between">
                          <div className="min-w-0">
                            <p className="text-muted-foreground text-xs">
                              {"Elevated scope"}
                            </p>
                            <p className="font-medium mt-1 text-sm">
                              {"Write on Settings"}
                            </p>
                            <p className="leading-5 mt-1 text-muted-foreground text-sm">
                              {"Granted by the custom Support Agent role. Expires in 7 days."}
                            </p>
                          </div>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            {"Write"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
