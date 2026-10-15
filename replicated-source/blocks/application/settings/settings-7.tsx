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
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-10 min-h-svh p-4 sm:p-6 w-full">
      <div className="max-w-4xl space-y-8 w-full">
        <header className="px-1">
          <h1 className="font-semibold text-xl tracking-tight">
            {"Account Settings"}
          </h1>
          <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
            {"Update your profile, access, notifications, and billing preferences."}
          </p>
        </header>
        <Tabs className="gap-4 lg:gap-8 w-full" data-orientation="vertical" activationDirection="none">
          <div className="min-w-0 shrink-0 w-40">
            <TabsList className="flex-col h-auto items-stretch p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger className="bg-muted! gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_4_" extracted="1">
                <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="truncate">
                  {"My Profile"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span className="truncate">
                  {"Security"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <span className="truncate">
                  {"Notifications"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <span className="truncate">
                  {"Billing"}
                </span>
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex-1 min-w-0">
            <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_4_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
              <div className="space-y-6">
                <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                  <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                    {"Complete your profile."}
                  </AlertTitle>
                  <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
                    {"Add a photo and keep your role and timezone current."}
                  </AlertDescription>
                  <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
                    <Button type="button" tabIndex="0">
                      {"Dismiss"}
                    </Button>
                    <Button type="button" tabIndex="0">
                      {"Update"}
                    </Button>
                  </AlertAction>
                </Alert>
                <Card className="gap-0 p-0" size="default">
                  <CardHeader className="border-b gap-0 px-5 py-3">
                    <CardTitle>
                      {"My profile"}
                    </CardTitle>
                    <CardDescription>
                      {"Public account details"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <FieldSet className="gap-0">
                      <FieldLegend className="sr-only" variant="legend">
                        {"Profile fields"}
                      </FieldLegend>
                      <FieldDescription className="sr-only">
                        {"Update your personal profile details."}
                      </FieldDescription>
                      <FieldGroup className="gap-0">
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-field-title items-center">
                                {"Photo"}
                              </FieldLabel>
                            </div>
                            <FieldDescription>
                              {"Shown in comments and mentions."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-78 min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <div className="flex flex-wrap gap-2 grow items-center justify-start">
                                <div className="relative">
                                  <Avatar className="size-10" size="default">
                                    <AvatarImage alt="Alex Morgan" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                </div>
                                <div className="inline-flex relative">
                                  <Button type="button" tabIndex="0" aria-haspopup="dialog">
                                    <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                                      <path d="M12 3v12"></path>
                                      <path d="m17 8-5-5-5 5"></path>
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    </svg>
                                    {"Change"}
                                  </Button>
                                  <input className="sr-only" id="settings-7-profile-photo" accept="image/*" aria-label="Upload profile image" tabIndex="-1" type="file" />
                                </div>
                                <Button type="button" tabIndex="0">
                                  <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                  </svg>
                                  {"Remove"}
                                </Button>
                              </div>
                            </div>
                          </FieldContent>
                        </Field>
                        <FieldSeparator content="false">
                          <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        </FieldSeparator>
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-full-name">
                                {"Full name"}
                              </FieldLabel>
                            </div>
                            <FieldDescription>
                              {"Used across the workspace."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-78 min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <Input id="settings-7-full-name" value="Alex Morgan"></Input>
                            </div>
                          </FieldContent>
                        </Field>
                        <FieldSeparator content="false">
                          <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        </FieldSeparator>
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-email">
                                {"Email address"}
                              </FieldLabel>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Verified"}
                              </Badge>
                            </div>
                            <FieldDescription>
                              {"Primary sign-in email."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-78 min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <Input id="settings-7-email" type="email" value="alex@acme.dev"></Input>
                            </div>
                          </FieldContent>
                        </Field>
                        <FieldSeparator content="false">
                          <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        </FieldSeparator>
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-username">
                                {"Username"}
                              </FieldLabel>
                            </div>
                            <FieldDescription>
                              {"Visible in mentions and links."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-78 min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <InputGroup role="group">
                                <InputGroupAddon role="group" data-align="inline-start">
                                  <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                    {"@"}
                                  </span>
                                </InputGroupAddon>
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="settings-7-username" value="alexmorgan" />
                              </InputGroup>
                            </div>
                          </FieldContent>
                        </Field>
                        <FieldSeparator content="false">
                          <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        </FieldSeparator>
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-field-title items-center">
                                {"Profile details"}
                              </FieldLabel>
                            </div>
                            <FieldDescription>
                              {"Public details shared across the workspace."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-[22rem] min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <FieldSet className="gap-3 w-full">
                                <FieldLegend className="sr-only" variant="legend">
                                  {"Profile details"}
                                </FieldLegend>
                                <FieldDescription className="sr-only">
                                  {"Public profile and workspace defaults."}
                                </FieldDescription>
                                <FieldGroup className="gap-4">
                                  <Field role="group" data-orientation="vertical">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-role">
                                      {"Role"}
                                    </FieldLabel>
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="settings-7-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        {"Engineering Lead"}
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        {"▼"}
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_8_-hidden-input" tabIndex="-1" aria-hidden="true" value="engineering-lead" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                  <Field role="group" data-orientation="vertical">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-timezone">
                                      {"Time zone"}
                                    </FieldLabel>
                                    <Select>
                                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="settings-7-timezone" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                      <SelectValue>
                                        {"UTC-8 (Pacific Time)"}
                                      </SelectValue>
                                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                        {"▼"}
                                      </svg>
                                    </SelectTrigger>
                                    </Select>
                                    <input id="base-ui-_r_b_-hidden-input" tabIndex="-1" aria-hidden="true" value="utc-8" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                  <Field role="group" data-orientation="vertical">
                                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-website">
                                      {"Website"}
                                    </FieldLabel>
                                    <InputGroup role="group">
                                      <InputGroupAddon role="group" data-align="inline-start">
                                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                          {"https://"}
                                        </span>
                                      </InputGroupAddon>
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="settings-7-website" value="alexmorgan.dev" />
                                    </InputGroup>
                                  </Field>
                                </FieldGroup>
                              </FieldSet>
                            </div>
                          </FieldContent>
                        </Field>
                        <FieldSeparator content="false">
                          <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        </FieldSeparator>
                        <Field className="gap-4 px-5 py-3" role="group" data-orientation="responsive">
                          <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center">
                              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="settings-7-bio">
                                {"Bio"}
                              </FieldLabel>
                            </div>
                            <FieldDescription>
                              {"Short profile summary."}
                            </FieldDescription>
                          </div>
                          <FieldContent className="@md/field-group:w-78 min-w-0">
                            <div className="@md/field-group:justify-end flex justify-start w-full">
                              <Textarea className="min-h-24 resize-none" id="settings-7-bio" rows="4">
                                {"Building developer tools at Acme. Previously at Vercel and Stripe."}
                              </Textarea>
                            </div>
                          </FieldContent>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </CardContent>
                  <CardFooter className="border-t gap-2 justify-end px-5 py-3">
                    <Button type="button" tabIndex="0">
                      {"Cancel"}
                    </Button>
                    <Button type="button" tabIndex="0">
                      {"Save changes"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
