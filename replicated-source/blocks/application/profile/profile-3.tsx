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
  CardFooter,
} from "@/registry/bases/base/ui/card"
import { ComboboxTrigger } from "@/registry/bases/base/ui/combobox"
import {
  Field,
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
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
        <header className="px-1 space-y-1">
          <h1 className="font-semibold text-2xl tracking-tight">
            {"Profile"}
          </h1>
          <p className="leading-relaxed max-w-2xl text-muted-foreground text-sm">
            {"Manage the identity and regional details shared across your workspace memberships."}
          </p>
        </header>
        <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
            {"Profile updates are shared"}
          </AlertTitle>
          <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
            {"Changes sync to mentions, approvals, and people directories in every workspace you join."}
          </AlertDescription>
          <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
            <Button type="button" tabIndex={0} extracted="1">
              {"Dismiss"}
            </Button>
            <Button type="button" tabIndex={0}>
              {"Review Details"}
            </Button>
          </AlertAction>
        </Alert>
        <Card className="overflow-hidden p-0" size="default">
          <CardContent className="px-6 py-7 sm:px-8">
            <div>
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <div className="relative shrink-0">
                    <Avatar className="size-16" size="default">
                      <AvatarImage alt="Shandc" src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 min-w-0">
                    <div className="min-w-0 space-y-px">
                      <h2 className="font-semibold text-base tracking-tight">
                        {"Profile Picture"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {"We only support PNGs, JPEGs and GIFs under 10MB."}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="inline-flex relative">
                        <Button type="button" tabIndex={0} aria-haspopup="dialog">
                          <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                            <path d="M12 3v12"></path>
                            <path d="m17 8-5-5-5 5"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          </svg>
                          {"Upload"}
                        </Button>
                        <input className="sr-only" id="profile-3-avatar" accept="image/png,image/jpeg,image/gif" aria-label="Upload profile image" tabIndex={-1} type="file" />
                      </div>
                      <Button type="button" tabIndex={0} aria-label="Remove current image">
                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                          <path d="M10 11v6"></path>
                          <path d="M14 11v6"></path>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                          <path d="M3 6h18"></path>
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="my-6" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="space-y-5" id="profile-3-basic-details">
                <div className="space-y-1">
                  <h2 className="font-semibold text-base tracking-tight">
                    {"Basic Details"}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground text-sm">
                    {"Keep your contact and identity fields current."}
                  </p>
                </div>
                <FieldGroup className="gap-x-6 gap-y-6 grid md:grid-cols-2">
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-first-name">
                      {"First Name"}
                    </FieldLabel>
                    <Input id="profile-3-first-name" value="Shandc"></Input>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-last-name">
                      {"Last Name"}
                    </FieldLabel>
                    <Input id="profile-3-last-name" placeholder="Optional" value=""></Input>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-email">
                        {"Primary Email Address"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Primary Email Address info" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                        {"Verified"}
                      </Badge>
                    </div>
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-3-email" type="email" value="shandc@neui.dev" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <Button className="cn-input-group-button cn-input-group-button-size-xs flex shadow-none" type="button" tabIndex={0} size="xs">
                          {"Edit"}
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      {"Used for sign-in, recovery, and workspace notices."}
                    </FieldDescription>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-preferred-name">
                        {"Preferred Name"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Preferred Name info" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Input id="profile-3-preferred-name" value="Shandc"></Input>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-username">
                        {"Username"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Username info" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                          {"@"}
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-3-username" value="shandc" />
                    </InputGroup>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-role">
                      {"Role"}
                    </FieldLabel>
                    <Field role="group" data-orientation="vertical">
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="profile-3-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          {"Product Operations"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_b_-hidden-input" tabIndex={-1} aria-hidden="true" value="product-ops" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-phone">
                      {"Phone Number"}
                    </FieldLabel>
                    <div className="PhoneInput flex w-full">
                      <ComboboxTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border-e-0 cn-button cn-button-size-default cn-button-variant-outline data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus:z-10 gap-1 group/button hover:bg-transparent items-center justify-center leading-none outline-none px-2.5 py-0 rounded-e-none select-none shrink-0 style-luma:rounded-s-3xl style-lyra:rounded-s-none style-maia:rounded-s-4xl style-mira:rounded-s-md style-nova:rounded-s-lg style-rhea:rounded-s-2xl style-sera:rounded-s-none style-vega:rounded-s-md transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_e_" role="combobox" aria-expanded="false" aria-haspopup="dialog">
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
                      <input id="base-ui-_r_e_-hidden-input" tabIndex={-1} aria-hidden="true" value="US" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Input className="PhoneInputInput focus:z-1 outline-none! ring-none! rounded-s-none" id="profile-3-phone" autoComplete="tel" placeholder="Enter phone number" type="tel" value="+1 206 555 1243"></Input>
                    </div>
                    <FieldDescription>
                      {"Used only for urgent verification and recovery."}
                    </FieldDescription>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-website">
                      {"Website"}
                    </FieldLabel>
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                          {"https://"}
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-3-website" value="shandc.dev" />
                    </InputGroup>
                  </Field>
                </FieldGroup>
              </div>
              <Separator className="my-6" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="space-y-5">
                <div className="space-y-1">
                  <h2 className="font-semibold text-base tracking-tight">
                    {"Regional Preferences"}
                  </h2>
                  <p className="leading-relaxed text-muted-foreground text-sm">
                    {"Choose how time and scheduling fields appear."}
                  </p>
                </div>
                <FieldGroup className="gap-x-6 gap-y-6 grid md:grid-cols-2">
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-timezone">
                        {"Preferred Timezone"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Preferred Timezone info" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Field role="group" data-orientation="vertical">
                      <InputGroup className="cn-combobox-input" role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-3-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="(GMT-5) New York" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                            <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                      <input id="base-ui-_r_l_-hidden-input" tabIndex={-1} aria-hidden="true" value="(GMT-5) New York" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <div className="flex gap-1.5 items-center">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-start-week">
                        {"Start Week On"}
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Start Week On info" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Field role="group" data-orientation="vertical">
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="profile-3-start-week" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          {"Monday"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_s_-hidden-input" tabIndex={-1} aria-hidden="true" value="monday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-language">
                      {"Language"}
                    </FieldLabel>
                    <Field role="group" data-orientation="vertical">
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="profile-3-language" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          {"English"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_v_-hidden-input" tabIndex={-1} aria-hidden="true" value="english" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </Field>
                  <Field className="gap-2.5" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-3-time-format">
                      {"Time Format"}
                    </FieldLabel>
                    <Field role="group" data-orientation="vertical">
                      <Select>
                      <SelectTrigger className="w-full" type="button" tabIndex={0} id="profile-3-time-format" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue>
                          {"24-hour"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_12_-hidden-input" tabIndex={-1} aria-hidden="true" value="24-hour" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </Field>
                  </Field>
                </FieldGroup>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full">
              <p className="text-muted-foreground text-sm">
                {"Save once to update your shared profile across every workspace."}
              </p>
              <div className="flex gap-2 items-center">
                <Button type="button" tabIndex={0}>
                  {"Reset"}
                </Button>
                <Button type="button" tabIndex={0}>
                  {"Save Changes"}
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
