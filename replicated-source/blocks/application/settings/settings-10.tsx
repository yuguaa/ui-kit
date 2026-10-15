import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
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
      <div className="max-w-2xl space-y-5 w-full">
        <div className="space-y-0.5">
          <h1 className="font-semibold text-xl">
            {"Security"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {"Define authentication rules and access boundaries for your workspace."}
          </p>
        </div>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              {"Session Policy"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Configure session duration and timeout rules for your workspace."}
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Enforce two-factor authentication"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Require all members to enable 2FA."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_0_" aria-checked="false" size="default" aria-label="Enforce two-factor authentication">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Session timeout"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Auto-logout after inactivity period."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Select>
                  <SelectTrigger className="w-40" type="button" tabIndex={0} id="base-ui-_r_3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                    <SelectValue>
                      {"4 hours"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_3_-hidden-input" tabIndex={-1} aria-hidden="true" value="4 hours" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Single active session"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Limit each user to one active session."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_6_" aria-checked="false" size="default" aria-label="Single active session">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="base-ui-_r_7_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              {"Login Methods"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Admins can always sign in via email. Changes apply to workspace members only."}
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Password authentication"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Allow members to log in with a password."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_9_" aria-checked="true" size="default" aria-label="Password authentication">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_a_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Magic link login"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Send a one-time link via email to sign in."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_c_" aria-checked="true" size="default" aria-label="Magic link login">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_d_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"SAML single sign-on"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Authenticate via your identity provider."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Enterprise"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              {"Access Restrictions"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Control which plan features are available to your workspace."}
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Member invitations"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Who can invite new members."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Basic"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Project creation"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Who can create new projects."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Business"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Custom roles"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Create and assign custom roles."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Business"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-4" variant="default" size="default">
                <ItemContent>
                  <ItemTitle>
                    {"Audit log access"}
                  </ItemTitle>
                  <ItemDescription>
                    {"View detailed workspace activity logs."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Enterprise"}
                  </Badge>
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
