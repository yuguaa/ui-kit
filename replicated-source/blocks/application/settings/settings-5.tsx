import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center max-w-4xl md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <Frame className="max-w-5xl w-full">
        <header className="flex flex-row gap-5 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
          <div className="space-y-px">
            <div className="font-semibold text-sm">
              Role Permissions for Project Manager
            </div>
            <div className="text-muted-foreground text-sm">
              Control the workspace capabilities this role can manage.
            </div>
          </div>
          <Button type="button" tabIndex="0" aria-label="Updates (new)" extracted="1">
            Permission
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-white transition-shadow" aria-hidden="true">
              New
            </Badge>
          </Button>
        </header>
        <FramePanel className="gap-3 grid grid-cols-1 lg:grid-cols-2">
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Workspace Settings
              </ItemTitle>
              <ItemDescription>
                Review workspace details, team defaults, and operational preferences.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" size="default" aria-label="Workspace Settings">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="workspace-settings" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Billing Management
              </ItemTitle>
              <ItemDescription>
                Access plan details, invoices, and subscription adjustments.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" size="default" aria-label="Billing Management">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="billing-management" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Integration Setup
              </ItemTitle>
              <ItemDescription>
                Configure apps, credentials, and automation entry points.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" size="default" aria-label="Integration Setup">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="integration-setup" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Permissions Control
              </ItemTitle>
              <ItemDescription>
                Grant, revoke, and review access scopes for collaborators.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" size="default" aria-label="Permissions Control">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="permissions-control" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Map Creation
              </ItemTitle>
              <ItemDescription>
                Create new workspace maps and maintain location structure.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" size="default" aria-label="Map Creation">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="map-creation" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Data Export
              </ItemTitle>
              <ItemDescription>
                Download structured workspace reports for analysis and audits.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_f_" aria-checked="true" size="default" aria-label="Data Export">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="data-export" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                User Roles
              </ItemTitle>
              <ItemDescription>
                Edit role assignments and keep team responsibility lines clear.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_i_" aria-checked="true" size="default" aria-label="User Roles">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="user-roles" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Security Settings
              </ItemTitle>
              <ItemDescription>
                Adjust workspace protection controls and policy requirements.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_l_" aria-checked="true" size="default" aria-label="Security Settings">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="security-settings" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Insights Access
              </ItemTitle>
              <ItemDescription>
                View performance dashboards, usage trends, and reporting panels.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" size="default" aria-label="Insights Access">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="insights-access" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
          <Item className="gap-3 items-start" variant="outline" size="default">
            <ItemContent className="gap-1.5">
              <ItemTitle>
                Merchant List
              </ItemTitle>
              <ItemDescription>
                Maintain merchant records and workspace-linked account mappings.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto self-center">
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" size="default" aria-label="Merchant List">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="merchant-list" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </ItemActions>
          </Item>
        </FramePanel>
      </Frame>
    </div>
  )
}
