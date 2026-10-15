import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-16 min-h-svh p-8 w-full">
      <Frame className="max-w-2xl w-full">
        <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="font-semibold text-sm">
            Privacy & Preferences
          </div>
          <div className="text-muted-foreground text-sm">
            Manage your account privacy settings and preferences to control how your data is used.
          </div>
        </header>
        <FramePanel className="p-0">
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Show up in search results
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                    Pro
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Control your visibility by choosing if you appear in search results.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="false" size="default" aria-label="Show up in search results">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="base-ui-_r_1_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Manage Read Receipts for Messages
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                    Pro
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enable or disable read receipts for private messages.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" size="default" aria-label="Manage Read Receipts for Messages">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-map-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Enable Location-Based Services
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  Allow the app to access and use your location for personalized content.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" size="default" aria-label="Enable Location-Based Services">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_7_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                  <path d="M14 17H5"></path>
                  <path d="M19 7h-9"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Ad Personalization Settings
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                    Beta
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Customize how ads are targeted to your interests.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex="0" extracted="1">
                  Setup
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Allow public profile
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enable users to create and display a profile publicly.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" size="default" aria-label="Allow public profile">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_a_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-locate-fixed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LocateFixed" tabler="IconCurrentLocation" hugeicons="Location04Icon" phosphor="CrosshairSimpleIcon" remixicon="RiFocus3Line" aria-hidden="true">
                  <line x1="2" x2="5" y1="12" y2="12"></line>
                  <line x1="19" x2="22" y1="12" y2="12"></line>
                  <line x1="12" x2="12" y1="2" y2="5"></line>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                  <circle cx="12" cy="12" r="7"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 gap-2 items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Allow use location
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enable feature to use and share the user's location.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" size="default" aria-label="Allow use location">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="base-ui-_r_d_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
          </div>
          <div className="border-b flex gap-4 items-center last:border-b-0 p-3.5">
            <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-1 flex-col gap-2 items-start sm:flex-row sm:items-center">
              <div className="flex-1 space-y-0.5">
                <div className="flex gap-2 items-center">
                  <h2 className="font-semibold text-sm">
                    Private vulnerability reporting
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                    Beta
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Confidential channel for reporting system vulnerabilities.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0 sm:w-auto w-full">
                <Button className="sm:flex-none" type="button" tabIndex="0">
                  Disable all
                </Button>
                <Button className="sm:flex-none" type="button" tabIndex="0">
                  Enable all
                </Button>
              </div>
            </div>
          </div>
        </FramePanel>
        <footer className="flex flex-row gap-(--frame-panel-footer-gap) justify-between px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
          <Button type="button" tabIndex="0">
            Cancel
          </Button>
          <Button type="button" tabIndex="0">
            Save changes
          </Button>
        </footer>
      </Frame>
    </div>
  )
}
