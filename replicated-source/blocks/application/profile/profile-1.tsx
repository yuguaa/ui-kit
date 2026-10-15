import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
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
import { Switch } from "@/registry/bases/base/ui/switch"
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
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-4xl space-y-8 w-full">
        <header className="px-1">
          <h1 className="font-semibold text-xl tracking-tight">
            {"Account Settings"}
          </h1>
          <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
            {"Update your account, workspace, team, and billing."}
          </p>
        </header>
        <Tabs className="gap-5 lg:gap-8 w-full" data-orientation="vertical" activationDirection="none">
          <div className="min-w-0 shrink-0 w-40">
            <TabsList className="flex-col h-auto items-stretch p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger className="bg-muted! gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_4_" extracted="1">
                <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx={12} cy={7} r={4}></circle>
                </svg>
                <span className="truncate">
                  {"Profile"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                  <path d="M10 12h4"></path>
                  <path d="M10 8h4"></path>
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                </svg>
                <span className="truncate">
                  {"Workspace"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx={9} cy={7} r={4}></circle>
                </svg>
                <span className="truncate">
                  {"Team"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                  <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                  <line x1={2} x2={22} y1={10} y2={10}></line>
                </svg>
                <span className="truncate">
                  {"Billing"}
                </span>
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="flex-1 min-w-0">
            <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_4_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_0_">
              <div className="space-y-4">
                <Frame spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="capitalize font-semibold text-sm">
                      {"Profile details"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Personal account info."}
                    </div>
                  </header>
                  <FramePanel className="p-0">
                    <FieldGroup className="gap-0">
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-photo">
                              <span className="capitalize">
                                {"Profile photo"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Shown in comments and mentions."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <div className="flex flex-wrap gap-2 grow items-center justify-start">
                              <div className="relative">
                                <Avatar className="border rounded-full size-10" size="default">
                                  <AvatarImage className="rounded-full" alt="Ava Chen" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                              </div>
                              <div className="inline-flex relative">
                                <Button type="button" tabIndex={0} aria-haspopup="dialog">
                                  <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                                    <path d="M12 3v12"></path>
                                    <path d="m17 8-5-5-5 5"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  </svg>
                                  {"Change"}
                                </Button>
                                <input className="sr-only" id="profile-photo" accept="image/*" aria-label="Upload profile photo" tabIndex={-1} type="file" />
                              </div>
                              <Button type="button" tabIndex={0}>
                                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
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
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-name">
                              <span className="capitalize">
                                {"Full name"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Used across Atlas."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Input id="profile-name" value="Ava Chen"></Input>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-email">
                              <span className="capitalize">
                                {"Email address"}
                              </span>
                            </FieldLabel>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                              {"Verified"}
                            </Badge>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Primary sign-in email."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Input id="profile-email" value="ava@atlashq.app"></Input>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Phone number"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Recovery and urgent alerts."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <div className="PhoneInput flex w-full">
                              <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border-e-0 cn-button cn-button-size-sm cn-button-variant-outline data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus:z-10 gap-1 group/button hover:bg-transparent items-center justify-center leading-none outline-none px-2.5 py-0 rounded-e-none select-none shrink-0 style-luma:rounded-s-3xl style-lyra:rounded-s-none style-maia:rounded-s-4xl style-mira:rounded-s-md style-nova:rounded-s-lg style-rhea:rounded-s-2xl style-sera:rounded-s-none style-vega:rounded-s-md transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
                                <span className="sr-only">
                                  {"United States"}
                                </span>
                                <span className="[&_svg:not([class*='size-'])]:rounded-[5px] [&_svg:not([class*='size-'])]:size-full! flex h-4 items-center justify-center w-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342">
                                    <title>
                                      {"US"}
                                    </title>
                                    <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                    <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
                                    <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                    <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
                                  </svg>
                                </span>
                              </ComboboxTrigger>
                              <input id="base-ui-_r_7_-hidden-input" tabIndex={-1} aria-hidden="true" value="US" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <Input className="PhoneInputInput focus:z-1 h-7 outline-none! ring-none! rounded-s-none" id="base-ui-_r_a_" autoComplete="tel" placeholder="Enter phone number" type="tel" value="+1 718 555 0188"></Input>
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
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-username">
                              <span className="capitalize">
                                {"Username"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Used in mentions and links."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <InputGroup role="group">
                              <InputGroupAddon role="group" data-align="inline-start">
                                <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                  {"@"}
                                </span>
                              </InputGroupAddon>
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-username" value="avachen" />
                            </InputGroup>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Public details"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Shown across Atlas."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[32rem] min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <FieldSet className="gap-3 w-full">
                              <FieldLegend className="sr-only" variant="legend">
                                {"Public details"}
                              </FieldLegend>
                              <FieldDescription className="sr-only">
                                {"Public profile and workspace defaults."}
                              </FieldDescription>
                              <FieldGroup className="gap-3">
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-role">
                                    {"Role"}
                                  </FieldLabel>
                                  <Select>
                                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="profile-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      {"Staff Product Lead"}
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      {"▼"}
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_c_-hidden-input" tabIndex={-1} aria-hidden="true" value="staff-product-lead" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-timezone">
                                    {"Time zone"}
                                  </FieldLabel>
                                  <Field role="group" data-orientation="vertical">
                                    <InputGroup className="cn-combobox-input" role="group">
                                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="(GMT-5) New York" />
                                      <InputGroupAddon role="group" data-align="inline-end">
                                        <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                          <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                            <path d="m6 9 6 6 6-6"></path>
                                          </svg>
                                        </button>
                                      </InputGroupAddon>
                                    </InputGroup>
                                    <input id="base-ui-_r_f_-hidden-input" tabIndex={-1} aria-hidden="true" value="(GMT-5) New York" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </Field>
                                </Field>
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-website">
                                    {"Website"}
                                  </FieldLabel>
                                  <InputGroup role="group">
                                    <InputGroupAddon role="group" data-align="inline-start">
                                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                        {"https://"}
                                      </span>
                                    </InputGroupAddon>
                                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-website" value="ava.atlashq.app" />
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
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-bio">
                              <span className="capitalize">
                                {"Bio"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Short profile summary."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] @md/field-group:w-full min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Textarea className="min-h-24 resize-none" id="profile-bio">
                              {"Leading launch systems, product operations, and internal tooling across the Atlas workspace."}
                            </Textarea>
                          </div>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </FramePanel>
                  <footer className="flex flex-row gap-2 justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <Button type="button" tabIndex={0}>
                      {"Cancel"}
                    </Button>
                    <Button type="button" tabIndex={0}>
                      {"Save changes"}
                    </Button>
                  </footer>
                </Frame>
                <Frame spacing="sm">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="capitalize font-semibold text-sm">
                      {"Profile preferences"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Default workspace behavior."}
                    </div>
                  </header>
                  <FramePanel className="p-0">
                    <FieldGroup className="gap-0">
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Language"}
                              </span>
                            </FieldLabel>
                          </div>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Field role="group" data-orientation="vertical">
                              <Select>
                              <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-language" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  <span className="flex flex-col gap-px items-start">
                                    <span className="font-medium">
                                      {"English (US)"}
                                    </span>
                                    <small className="text-muted-foreground text-sm">
                                      {"Default product language"}
                                    </small>
                                  </span>
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_l_-hidden-input" tabIndex={-1} aria-hidden="true" value="en-us" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Landing view"}
                              </span>
                            </FieldLabel>
                          </div>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Field role="group" data-orientation="vertical">
                              <Select>
                              <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-landing-view" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  <span className="flex flex-col gap-px items-start">
                                    <span className="font-medium">
                                      {"Priority inbox"}
                                    </span>
                                    <small className="text-muted-foreground text-sm">
                                      {"Focus on approvals"}
                                    </small>
                                  </span>
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_o_-hidden-input" tabIndex={-1} aria-hidden="true" value="inbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                {"Digest cadence"}
                              </span>
                            </FieldLabel>
                          </div>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Field role="group" data-orientation="vertical">
                              <Select>
                              <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="profile-digest" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <SelectValue>
                                  <span className="flex flex-col gap-px items-start">
                                    <span className="font-medium">
                                      {"Weekly summary"}
                                    </span>
                                    <small className="text-muted-foreground text-sm">
                                      {"Monday planning recap"}
                                    </small>
                                  </span>
                                </SelectValue>
                                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  {"▼"}
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_r_-hidden-input" tabIndex={-1} aria-hidden="true" value="weekly" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="gap-4 px-5 py-4" role="group" data-orientation="responsive">
                        <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-daily-briefing" id="profile-daily-briefing-label">
                              <span className="capitalize">
                                {"Daily briefing"}
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            {"Morning recap before meetings."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[17rem] @md/field-group:shrink-0 min-w-0 w-full">
                          <div className="@md/field-group:justify-end flex justify-start w-full">
                            <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_u_" aria-checked="true" size="default" aria-labelledby="profile-daily-briefing-label">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="profile-daily-briefing" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
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
