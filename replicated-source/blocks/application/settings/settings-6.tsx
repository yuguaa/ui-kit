import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-16 min-h-svh p-8 w-full">
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        <div className="space-y-0.5">
          <h1 className="font-semibold text-xl">
            {"Integrations"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {"Connect your favorite apps to automate workflows and stay updated on events."}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Frame>
            <FramePanel className="space-y-2.5">
              <Item className="p-0" variant="default" size="default">
                <ItemMedia className="self-center! translate-y-0!" variant="default">
                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="size-4" viewBox="0 0 228 120">
                      <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {"n8n"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Automate your workflows and integrate with thousands of apps."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" tabIndex="0" extracted="1">
                    {"Connect"}
                  </Button>
                </ItemActions>
              </Item>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="space-y-2.5">
              <Item className="p-0" variant="default" size="default">
                <ItemMedia className="self-center! translate-y-0!" variant="default">
                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="size-4" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {"Slack"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Send call and message logs to your Slack workspace."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" tabIndex="0">
                    {"Disconnect"}
                  </Button>
                </ItemActions>
              </Item>
              <div className="space-y-2">
                <Item variant="muted" size="default">
                  <ItemContent>
                    <ItemTitle>
                      {"Messages"}
                    </ItemTitle>
                    <ItemDescription>
                      {"Send incoming messages to my channel"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" size="default" aria-label="Messages">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="base-ui-_r_1_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </ItemActions>
                </Item>
                <Item variant="muted" size="default">
                  <ItemContent>
                    <ItemTitle>
                      {"Alerts"}
                    </ItemTitle>
                    <ItemDescription>
                      {"Send system alerts to my channel"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="true" size="default" aria-label="Alerts">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </ItemActions>
                </Item>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="space-y-2.5">
              <Item className="p-0" variant="default" size="default">
                <ItemMedia className="self-center! translate-y-0!" variant="default">
                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="size-4" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                      <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {"Discord"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Post event notifications to your Discord server channels."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" tabIndex="0">
                    {"Disconnect"}
                  </Button>
                </ItemActions>
              </Item>
              <div className="space-y-2">
                <Item variant="muted" size="default">
                  <ItemContent>
                    <ItemTitle>
                      {"Deploys"}
                    </ItemTitle>
                    <ItemDescription>
                      {"Notify on successful deployments"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" size="default" aria-label="Deploys">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                    </Switch>
                    <input id="base-ui-_r_7_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </ItemActions>
                </Item>
                <Item variant="muted" size="default">
                  <ItemContent>
                    <ItemTitle>
                      {"Errors"}
                    </ItemTitle>
                    <ItemDescription>
                      {"Forward error reports to a channel"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" size="default" aria-label="Errors">
                      <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                    </Switch>
                    <input id="base-ui-_r_a_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </ItemActions>
                </Item>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="space-y-2.5">
              <Item className="p-0" variant="default" size="default">
                <ItemMedia className="self-center! translate-y-0!" variant="default">
                  <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="size-4" fill="none" viewBox="100 100 312 312">
                      <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    {"Stripe"}
                  </ItemTitle>
                  <ItemDescription>
                    {"Sync payment events and subscription lifecycle changes."}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button type="button" tabIndex="0">
                    {"Connect"}
                  </Button>
                </ItemActions>
              </Item>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
