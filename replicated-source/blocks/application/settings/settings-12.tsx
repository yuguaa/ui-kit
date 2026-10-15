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
import { Field } from "@/registry/bases/base/ui/field"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-6 max-w-3xl w-full">
        <div className="space-y-0.5">
          <h1 className="font-semibold text-xl">
            {"Notification settings"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {"Choose how workspace updates reach you."}
          </p>
        </div>
        <div className="space-y-3">
          <Card className="p-0" size="default">
            <CardContent className="p-0">
              <Item variant="default" size="sm">
                <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-1 min-w-0">
                  <ItemTitle className="gap-2">
                    <span className="min-w-0 truncate">
                      {"Inbox"}
                    </span>
                  </ItemTitle>
                  <ItemDescription>
                    {"Approvals, handoffs, and follow-ups."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="sm:self-center sm:w-auto w-full">
                  <Field className="sm:w-auto" role="group" data-orientation="vertical">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden sm:w-[240px] w-full" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                      <SelectValue>
                        <span className="flex flex-col gap-px items-start">
                          <span className="font-medium">
                            {"Default"}
                          </span>
                          <small className="text-muted-foreground text-xs">
                            {"Balanced everyday updates."}
                          </small>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="default" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </ItemActions>
              </Item>
            </CardContent>
          </Card>
          <Card className="p-0" size="default">
            <CardContent className="p-0">
              <Item variant="default" size="sm">
                <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-1 min-w-0">
                  <ItemTitle className="gap-2">
                    <span className="min-w-0 truncate">
                      {"Email"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      {"Send sample"}
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    {"Digests and direct alerts."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="sm:self-center sm:w-auto w-full">
                  <Field className="sm:w-auto" role="group" data-orientation="vertical">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden sm:w-[240px] w-full" type="button" tabIndex="0" id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        <span className="flex flex-col gap-px items-start">
                          <span className="font-medium">
                            {"Default"}
                          </span>
                          <small className="text-muted-foreground text-xs">
                            {"Balanced everyday updates."}
                          </small>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_3_-hidden-input" tabIndex="-1" aria-hidden="true" value="default" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </ItemActions>
              </Item>
            </CardContent>
          </Card>
          <Card className="p-0" size="default">
            <CardContent className="p-0">
              <Item variant="default" size="sm">
                <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-monitor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-1 min-w-0">
                  <ItemTitle className="gap-2">
                    <span className="min-w-0 truncate">
                      {"Browser"}
                    </span>
                  </ItemTitle>
                  <ItemDescription>
                    {"Desktop banners stay off until enabled."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="sm:self-center sm:w-auto w-full">
                  <Button className="sm:w-auto w-full" type="button" tabIndex="0">
                    {"Enable notifications"}
                  </Button>
                </ItemActions>
              </Item>
            </CardContent>
          </Card>
          <Card className="p-0" size="default">
            <CardContent className="p-0">
              <Item variant="default" size="sm">
                <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                  <svg className="lucide lucide-smartphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="gap-1 min-w-0">
                  <ItemTitle className="gap-2">
                    <span className="min-w-0 truncate">
                      {"Mobile"}
                    </span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                      {"Show example"}
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    {"Away-from-desk delivery."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="sm:self-center sm:w-auto w-full">
                  <Field className="sm:w-auto" role="group" data-orientation="vertical">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden sm:w-[240px] w-full" type="button" tabIndex="0" id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        <span className="flex flex-col gap-px items-start">
                          <span className="font-medium">
                            {"Default"}
                          </span>
                          <small className="text-muted-foreground text-xs">
                            {"Balanced everyday updates."}
                          </small>
                        </span>
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_6_-hidden-input" tabIndex="-1" aria-hidden="true" value="default" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </ItemActions>
              </Item>
              <Item variant="default" size="sm">
                <ItemMedia className="size-10" variant="default">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" size="sm" aria-label="Smart notifications">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_a_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemMedia>
                <ItemContent className="gap-1 min-w-0">
                  <ItemTitle className="gap-2">
                    <span className="min-w-0 truncate">
                      {"Smart notifications"}
                    </span>
                  </ItemTitle>
                  <ItemDescription>
                    {"Pause phone alerts while desktop stays active."}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </CardContent>
          </Card>
        </div>
        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="font-semibold text-base">
              {"Integrations"}
            </h2>
          </div>
          <div className="space-y-3">
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <Item variant="default" size="sm">
                  <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                    <svg className="size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <ItemTitle className="gap-2">
                      <span className="min-w-0 truncate">
                        {"Slack"}
                      </span>
                    </ItemTitle>
                    <ItemDescription>
                      {"Send priority updates to a team channel."}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="sm:self-center sm:w-auto w-full">
                    <Button className="sm:w-auto w-full" type="button" tabIndex="0">
                      {"Connect Slack"}
                    </Button>
                  </ItemActions>
                </Item>
              </CardContent>
            </Card>
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <Item variant="default" size="sm">
                  <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                    <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                      <defs>
                        <lineargradient id="_r_c_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                          <stop offset=".00006%" stopColor="#0845BF"></stop>
                          <stop offset="19.11%" stopColor="#0950DE"></stop>
                          <stop offset="38.23%" stopColor="#0B59F6"></stop>
                          <stop offset="50%" stopColor="#0B5CFF"></stop>
                          <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                          <stop offset="77.74%" stopColor="#1665FC"></stop>
                          <stop offset="86.33%" stopColor="#246FF9"></stop>
                          <stop offset="93.88%" stopColor="#387FF4"></stop>
                          <stop offset="100%" stopColor="#4F90EE"></stop>
                        </lineargradient>
                      </defs>
                      <path fill="url(#_r_c_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                      <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                    </svg>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <ItemTitle className="gap-2">
                      <span className="min-w-0 truncate">
                        {"Zoom"}
                      </span>
                    </ItemTitle>
                    <ItemDescription>
                      {"Post meeting alerts and call follow-ups."}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="sm:self-center sm:w-auto w-full">
                    <Button className="sm:w-auto w-full" type="button" tabIndex="0">
                      {"Connect Zoom"}
                    </Button>
                  </ItemActions>
                </Item>
              </CardContent>
            </Card>
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <Item variant="default" size="sm">
                  <ItemMedia className="[&_svg]:size-5 size-10 text-muted-foreground" variant="icon">
                    <svg className="size-5" aria-hidden="true" viewBox="0 0 622 512" fill="none">
                      <g clipPath="url(#googlemeet-clip0)">
                        <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                        <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                        <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                        <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                        <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                        <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                        <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                      </g>
                      <defs>
                        <clippath id="googlemeet-clip0">
                          <rect width="621.2" height="512" fill="white"></rect>
                        </clippath>
                      </defs>
                    </svg>
                  </ItemMedia>
                  <ItemContent className="gap-1 min-w-0">
                    <ItemTitle className="gap-2">
                      <span className="min-w-0 truncate">
                        {"Google Meet"}
                      </span>
                    </ItemTitle>
                    <ItemDescription>
                      {"Route calendar and live session updates."}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="sm:self-center sm:w-auto w-full">
                    <Button className="sm:w-auto w-full" type="button" tabIndex="0">
                      {"Connect Meet"}
                    </Button>
                  </ItemActions>
                </Item>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="space-y-3">
          <div className="space-y-1">
            <h2 className="font-semibold text-base">
              {"General settings"}
            </h2>
          </div>
          <div className="space-y-3">
            <Card className="p-0" size="default">
              <CardContent className="p-0">
                <Collapsible data-open="">
                  <Item variant="default" size="sm">
                    <ItemMedia className="size-10" variant="default">
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_e_" aria-checked="true" size="sm" aria-label="Auto-follow active work">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="base-ui-_r_f_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemMedia>
                    <ItemContent className="gap-1 min-w-0">
                      <ItemTitle className="gap-2">
                        <span className="min-w-0 truncate">
                          {"Auto-follow active work"}
                        </span>
                      </ItemTitle>
                      <ItemDescription>
                        {"Created work"}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="self-start shrink-0 sm:self-center sm:w-auto w-auto">
                      <Collapsible>
                      <CollapsibleTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Toggle Auto-follow active work details" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_d_" aria-expanded="true">
                        <svg className="in-data-open:rotate-180 lucide lucide-chevron-down size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </CollapsibleTrigger>
                      </Collapsible>
                    </ItemActions>
                  </Item>
                  <CollapsibleContent data-open="" id="base-ui-_r_d_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex flex-col">
                      <div>
                        <Item className="pl-7 sm:pl-9" variant="default" size="sm">
                          <ItemMedia className="size-10" variant="default">
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_h_" aria-checked="true" size="sm" aria-label="Follow work you create">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_i_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </ItemMedia>
                          <ItemContent className="gap-1 min-w-0">
                            <ItemTitle className="gap-2">
                              <span className="min-w-0 truncate">
                                {"Follow work you create"}
                              </span>
                            </ItemTitle>
                            <ItemDescription>
                              {"Start tracking a task or thread the moment you open it."}
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </div>
                      <div>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <Item className="pl-7 sm:pl-9" variant="default" size="sm">
                          <ItemMedia className="size-10" variant="default">
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" size="sm" aria-label="Follow work you edit">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_l_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </ItemMedia>
                          <ItemContent className="gap-1 min-w-0">
                            <ItemTitle className="gap-2">
                              <span className="min-w-0 truncate">
                                {"Follow work you edit"}
                              </span>
                            </ItemTitle>
                            <ItemDescription>
                              {"Stay subscribed after changing status, owner, or due date."}
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </div>
                      <div>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <Item className="pl-7 sm:pl-9" variant="default" size="sm">
                          <ItemMedia className="size-10" variant="default">
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" size="sm" aria-label="Follow work you comment on">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_o_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </ItemMedia>
                          <ItemContent className="gap-1 min-w-0">
                            <ItemTitle className="gap-2">
                              <span className="min-w-0 truncate">
                                {"Follow work you comment on"}
                              </span>
                            </ItemTitle>
                            <ItemDescription>
                              {"Keep replies and follow-up decisions in view automatically."}
                            </ItemDescription>
                          </ItemContent>
                        </Item>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
