import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/registry/bases/base/ui/sidebar"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-4 w-full">
      <SidebarProvider>
      <div className="[--sidebar-accent-foreground:var(--color-foreground)] [--sidebar-accent:var(--color-muted)] [--sidebar-border:var(--color-border)] [--sidebar-width:16rem] [--sidebar:var(--color-background)] bg-background flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar max-md:flex-col min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
        <SidebarProvider>
        <Sidebar className="max-md:w-full">
          <SidebarProvider>
          <SidebarContent className="p-2 pt-0" sidebar="content">
            <SidebarProvider>
            <SidebarGroup sidebar="group">
              <SidebarProvider>
              <SidebarGroupLabel sidebar="group-label">
                {"Profile Settings"}
              </SidebarGroupLabel>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroupContent sidebar="group-content">
                <SidebarProvider>
                <SidebarMenu sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="profile-9-sidebar-account" extracted="1">
                      <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                        <path d="m14.305 19.53.923-.382"></path>
                        <path d="m15.228 16.852-.923-.383"></path>
                        <path d="m16.852 15.228-.383-.923"></path>
                        <path d="m16.852 20.772-.383.924"></path>
                        <path d="m19.148 15.228.383-.923"></path>
                        <path d="m19.53 21.696-.382-.924"></path>
                        <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                        <path d="m20.772 16.852.924-.383"></path>
                        <path d="m20.772 19.148.924.383"></path>
                        <circle cx="10" cy="8" r="5"></circle>
                        <circle cx="18" cy="18" r="3"></circle>
                      </svg>
                      <span>
                        {"Account"}
                      </span>
                      <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </SidebarMenuButton>
                    </SidebarProvider>
                    <SidebarMenuSub sidebar="menu-sub" id="profile-9-sidebar-account">
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" data-active="" href="#">
                          <span>
                            {"Authentication"}
                          </span>
                          <SidebarMenuBadge sidebar="menu-badge">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                              {"Active"}
                            </Badge>
                          </SidebarMenuBadge>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Profile Details"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Sessions"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Notifications"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="profile-9-sidebar-workspace">
                      <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                        <path d="M10 12h4"></path>
                        <path d="M10 8h4"></path>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                      </svg>
                      <span>
                        {"Workspace"}
                      </span>
                      <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </SidebarMenuButton>
                    </SidebarProvider>
                    <SidebarMenuSub sidebar="menu-sub" id="profile-9-sidebar-workspace">
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Organization"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Members"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Billing"}
                          </span>
                          <SidebarMenuBadge sidebar="menu-badge">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                              {"Pro"}
                            </Badge>
                          </SidebarMenuBadge>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Branding"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="profile-9-sidebar-developers">
                      <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                        <path d="m16 18 6-6-6-6"></path>
                        <path d="m8 6-6 6 6 6"></path>
                      </svg>
                      <span>
                        {"Developers"}
                      </span>
                      <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </SidebarMenuButton>
                    </SidebarProvider>
                    <SidebarMenuSub sidebar="menu-sub" id="profile-9-sidebar-developers">
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"API Keys"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Webhooks"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem sidebar="menu-sub-item">
                        <SidebarMenuSubButton sidebar="menu-sub-button" size="md" href="#">
                          <span>
                            {"Audit Log"}
                          </span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarGroupContent>
              </SidebarProvider>
            </SidebarGroup>
            </SidebarProvider>
          </SidebarContent>
          </SidebarProvider>
        </Sidebar>
        </SidebarProvider>
        <SidebarInset className="bg-background min-w-0">
          <form className="min-h-full" id="profile-9-settings">
            <div className="flex flex-col gap-4 lg:p-5 min-w-0 p-3 sm:p-4">
              <div className="flex gap-3 items-start justify-between min-w-0">
                <div className="min-w-0">
                  <div className="flex gap-2 items-center min-w-0">
                    <h2 className="font-semibold text-xl tracking-tight truncate">
                      {"Authentication"}
                    </h2>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      {"Active"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground text-sm">
                    {"Sign-up, password, and verification rules"}
                  </p>
                </div>
              </div>
              <Card className="gap-0 p-0" size="default">
                <CardHeader className="border-b gap-0.5 px-4 py-3">
                  <CardTitle>
                    {"Sign-In Methods"}
                  </CardTitle>
                  <CardDescription>
                    {"Choose how users create and access accounts."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <FieldGroup className="gap-1 py-1">
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-email-signup" id="profile-9-email-signup-label">
                            {"Email Sign-Up"}
                          </FieldLabel>
                        </div>
                        <FieldDescription>
                          {"Allow new users to register with email."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" size="default" aria-labelledby="profile-9-email-signup-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="profile-9-email-signup" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-password" id="profile-9-password-label">
                            {"Password Sign-In"}
                          </FieldLabel>
                        </div>
                        <FieldDescription>
                          {"Keep password login available for returning users."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" size="default" aria-labelledby="profile-9-password-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="profile-9-password" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-verification">
                            {"Verification Method"}
                          </FieldLabel>
                        </div>
                        <FieldDescription>
                          {"Primary email verification experience."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="profile-9-verification" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"Verification Code"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_c_-hidden-input" tabIndex="-1" aria-hidden="true" value="otp" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </CardContent>
              </Card>
              <Card className="gap-0 p-0" size="default">
                <CardHeader className="border-b gap-0.5 px-4 py-3">
                  <CardTitle>
                    {"Protection"}
                  </CardTitle>
                  <CardDescription>
                    {"Keep account changes and sessions controlled."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <FieldGroup className="gap-1 py-1">
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-require-email" id="profile-9-require-email-label">
                            {"Require Email Address"}
                          </FieldLabel>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            {"Required"}
                          </Badge>
                        </div>
                        <FieldDescription>
                          {"Users must keep one reachable email on file."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_f_" aria-checked="true" size="default" aria-labelledby="profile-9-require-email-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="profile-9-require-email" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-session-duration">
                            {"Session Lifetime"}
                          </FieldLabel>
                        </div>
                        <FieldDescription>
                          {"Default duration for authenticated sessions."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Select>
                        <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex="0" id="profile-9-session-duration" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue>
                            {"24 Hours"}
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_i_-hidden-input" tabIndex="-1" aria-hidden="true" value="24h" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                    <Field className="gap-y-2.5 grid md:gap-x-7 md:grid-cols-[minmax(0,clamp(15.5rem,43%,17.8rem))_minmax(0,1fr)] md:items-center px-4 py-2.5" role="group" data-orientation="vertical">
                      <FieldContent className="gap-0.5">
                        <div className="flex flex-wrap gap-2 items-center min-w-0">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-9-restrict-changes" id="profile-9-restrict-changes-label">
                            {"Restrict Changes"}
                          </FieldLabel>
                        </div>
                        <FieldDescription>
                          {"Prevent email changes after sign-up."}
                        </FieldDescription>
                      </FieldContent>
                      <FieldContent className="min-w-0 w-full">
                        <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" size="default" aria-labelledby="profile-9-restrict-changes-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="profile-9-restrict-changes" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </CardContent>
                <CardFooter className="border-t gap-2 justify-end px-4 py-2.5">
                  <Button type="button" tabIndex="0">
                    {"Cancel"}
                  </Button>
                  <Button type="submit" tabIndex="0" form="profile-9-settings">
                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    {"Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </SidebarInset>
      </div>
      </SidebarProvider>
    </div>
  )
}
