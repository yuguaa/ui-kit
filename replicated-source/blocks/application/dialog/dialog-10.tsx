import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
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
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        User profile settings dialog
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" data-icon="inline-start" aria-hidden="true">
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
          Open profile settings
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="**:data-[slot=dialog-close]:right-4 **:data-[slot=dialog-close]:top-4 flex flex-col gap-0 h-[min(88svh,48rem)] lg:max-w-[60rem] max-w-[calc(100vw-1.5rem)] overflow-hidden p-0 sm:max-w-4xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_7_" aria-describedby="base-ui-_r_8_" style={{"--nested-dialogs": "0"}}>
      <form className="flex flex-1 flex-col min-h-0">
        <Tabs className="flex-1 flex-col gap-0 lg:flex-row lg:items-stretch min-h-0" data-orientation="vertical" activationDirection="none">
          <aside className="bg-muted/20 border-b flex flex-col lg:border-b-0 lg:border-r lg:min-h-0 lg:pr-5 lg:py-4 lg:self-stretch lg:w-56 pl-5 pr-12 py-3 shrink-0">
            <div className="min-w-0">
              <TabsList className="flex-col h-auto items-stretch p-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                <TabsTrigger className="bg-muted! gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2_" compositeItemActive="" aria-controls="base-ui-_r_9_">
                  <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="truncate">
                    Profile
                  </span>
                </TabsTrigger>
                <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                  <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                    <path d="M10 12h4"></path>
                    <path d="M10 8h4"></path>
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  </svg>
                  <span className="truncate">
                    Workspace
                  </span>
                </TabsTrigger>
                <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                  <span className="truncate">
                    Team
                  </span>
                </TabsTrigger>
                <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5_">
                  <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                  <span className="truncate">
                    Billing
                  </span>
                </TabsTrigger>
                <TabsTrigger className="bg-transparent gap-3 justify-start px-3 py-1.5 shadow-none w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_6_">
                  <svg className="lucide lucide-sliders-horizontal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M10 5H3"></path>
                    <path d="M12 19H3"></path>
                    <path d="M14 3v4"></path>
                    <path d="M16 17v4"></path>
                    <path d="M21 12h-9"></path>
                    <path d="M21 19h-5"></path>
                    <path d="M21 5h-7"></path>
                    <path d="M8 10v4"></path>
                    <path d="M8 12H3"></path>
                  </svg>
                  <span className="truncate">
                    Preferences
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
          </aside>
          <div className="flex flex-1 flex-col min-h-0 min-w-0 overflow-hidden">
            <DialogHeader className="gap-0 px-6 py-0 shrink-0 text-left">
              <div className="border-b border-border flex flex-col gap-1.5 pr-12 py-4 w-full">
                <DialogTitle className="leading-6 text-lg" id="base-ui-_r_7_">
                  Profile
                </DialogTitle>
                <DialogDescription id="base-ui-_r_8_">
                  Manage your account identity.
                </DialogDescription>
              </div>
            </DialogHeader>
            <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
              <TabsContent className="flex flex-col min-h-0 min-w-0 mt-0 overflow-hidden" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_9_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_2_">
                <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:duration-150 **:data-[slot=scroll-area-scrollbar]:opacity-0 **:data-[slot=scroll-area-scrollbar]:transition-opacity flex-1 hover:**:data-[slot=scroll-area-scrollbar]:opacity-100 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_a_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "171px"}} data-has-overflow-y="" data-overflow-y-end="">
                    <FieldGroup className="gap-4! py-5">
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:has-[>[data-slot=field-content]]:items-center! gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-avatar">
                              <span className="capitalize">
                                Profile photo
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            Shown in comments and mentions.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-center justify-start min-w-0 w-full">
                            <div className="flex flex-wrap gap-2 items-center justify-start">
                              <Avatar className="size-12" size="default">
                                <AvatarImage alt="Ava Chen profile photo" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <div className="inline-flex relative">
                                <Tooltip>
                                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="dialog" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                                  <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                                    <path d="M12 3v12"></path>
                                    <path d="m17 8-5-5-5 5"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  </svg>
                                  Change
                                </TooltipTrigger>
                                </Tooltip>
                                <input className="sr-only" id="profile-avatar" accept="image/*" aria-label="Upload profile avatar" tabIndex="-1" type="file" />
                              </div>
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" data-icon="inline-start" aria-hidden="true">
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                                Remove
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:has-[>[data-slot=field-content]]:items-center! gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-name">
                              <span className="capitalize">
                                Full name
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            Used across Atlas.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-center justify-start min-w-0 w-full">
                            <Input id="profile-name" value="Ava Chen"></Input>
                          </div>
                        </FieldContent>
                      </Field>
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:has-[>[data-slot=field-content]]:items-center! gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-email">
                              <span className="capitalize">
                                Email address
                              </span>
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="cursor-help focus-visible:ring-2 focus-visible:ring-ring inline-flex outline-none rounded-sm" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                Verified
                              </Badge>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <FieldDescription className="text-sm">
                            Primary sign-in email.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-center justify-start min-w-0 w-full">
                            <Input id="profile-email" value="ava@atlashq.app"></Input>
                          </div>
                        </FieldContent>
                      </Field>
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:has-[>[data-slot=field-content]]:items-center! gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-username">
                              <span className="capitalize">
                                Username
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            Used in mentions and links.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-center justify-start min-w-0 w-full">
                            <InputGroup role="group">
                              <InputGroupAddon role="group" data-align="inline-start">
                                <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                  @
                                </span>
                              </InputGroupAddon>
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-username" value="avachen" />
                            </InputGroup>
                          </div>
                        </FieldContent>
                      </Field>
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:items-start gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-field-title items-center">
                              <span className="capitalize">
                                Public details
                              </span>
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-sm shrink-0 size-7 text-muted-foreground" type="button" aria-label="Role, time zone, and website show on your public profile." id="base-ui-_r_l_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 16v-4"></path>
                                <path d="M12 8h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <FieldDescription className="text-sm">
                            Shown across Atlas.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-start justify-start min-w-0 w-full">
                            <FieldSet className="gap-4! w-full">
                              <FieldLegend className="sr-only" variant="legend">
                                Public details
                              </FieldLegend>
                              <FieldGroup className="gap-4!">
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-role">
                                    Role
                                  </FieldLabel>
                                  <Select>
                                  <SelectTrigger className="border border-input font-normal gap-2 px-4 py-2 rounded-lg shadow-none text-foreground text-sm w-full" type="button" tabIndex="0" id="profile-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      Staff Product Lead
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_m_-hidden-input" tabIndex="-1" aria-hidden="true" value="staff-product-lead" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-timezone">
                                    Time zone
                                  </FieldLabel>
                                  <Select>
                                  <SelectTrigger className="border border-input font-normal gap-2 px-4 py-2 rounded-lg shadow-none text-foreground text-sm w-full" type="button" tabIndex="0" id="profile-timezone" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      (GMT-5) New York
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_p_-hidden-input" tabIndex="-1" aria-hidden="true" value="new-york" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </Field>
                                <Field role="group" data-orientation="vertical">
                                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-website">
                                    Website
                                  </FieldLabel>
                                  <InputGroup role="group">
                                    <InputGroupAddon role="group" data-align="inline-start">
                                      <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                                        https://
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
                      <Field className="@md/field-group:grid @md/field-group:grid-cols-[minmax(8.25rem,0.74fr)_minmax(0,1.26fr)] @md/field-group:items-start gap-4! px-6 py-0" role="group" data-orientation="responsive">
                        <div className="flex flex-col gap-0.5 min-w-0 w-full">
                          <div className="flex flex-wrap gap-2 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-bio">
                              <span className="capitalize">
                                Bio
                              </span>
                            </FieldLabel>
                          </div>
                          <FieldDescription className="text-sm">
                            Short profile summary.
                          </FieldDescription>
                        </div>
                        <FieldContent className="max-w-none min-w-0 w-full">
                          <div className="flex items-start justify-start min-w-0 w-full">
                            <Textarea className="field-sizing-fixed min-h-0 mt-2" id="profile-bio" rows="4">
                              Leading launch systems, product operations, and internal tooling across the Atlas workspace.
                            </Textarea>
                          </div>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_a_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "287.0051724137931px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </div>
            <DialogFooter className="bg-transparent! border-0 m-0 px-6 py-0">
              <div className="border-border border-t flex gap-2 items-center justify-end py-4 shrink-0 w-full">
                <Button type="button" tabIndex="0">
                  Cancel
                </Button>
                <Button type="submit" tabIndex="0">
                  Save changes
                </Button>
              </div>
            </DialogFooter>
          </div>
        </Tabs>
      </form>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          Close
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
