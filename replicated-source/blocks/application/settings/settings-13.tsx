import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-4xl space-y-4 w-full">
        <div className="flex flex-col gap-4">
          <div className="space-y-0.5">
            <h1 className="font-semibold text-xl">
              {"Integrations"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {"Enhance your workspace by linking external tools for communication, payments, and automation."}
            </p>
          </div>
        </div>
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0" extracted="1">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Releases, on-call alerts, and approvals in your channels."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="true">
                {"Disconnect"}
              </Button>
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="base-ui-_r_1_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" fill="none" viewBox="100 100 312 312">
                      <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Charges, retries, and payouts across connected tools."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="false">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect"}
              </Button>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 109 113" fill="none">
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                      <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                      <defs>
                        <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#249361"></stop>
                          <stop offset="1" stopColor="#3ECF8E"></stop>
                        </lineargradient>
                        <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                          <stop></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"DB and auth events for live dashboards."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="true">
                {"Disconnect"}
              </Button>
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="base-ui-_r_7_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 228 120">
                      <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Automation runs: successes and failures in one place."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="true">
                {"Disconnect"}
              </Button>
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="base-ui-_r_a_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
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
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Recordings, attendance, and follow-ups synced."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="false">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect"}
              </Button>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_d_" aria-checked="false" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_e_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                      <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Async walkthroughs and feedback in one queue."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="true">
                {"Disconnect"}
              </Button>
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_g_" aria-checked="true" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="base-ui-_r_h_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                      <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Community signals and mod flags to internal channels."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="false">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect"}
              </Button>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_j_" aria-checked="false" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_k_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 296 298" fill="none">
                      <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                        <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                      </mask>
                      <g mask="url(#gemini-a)">
                        <g filter="url(#gemini-b)">
                          <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                        </g>
                        <g filter="url(#gemini-c)">
                          <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                        </g>
                        <g filter="url(#gemini-d)">
                          <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                        </g>
                        <g filter="url(#gemini-e)">
                          <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                        </g>
                        <g filter="url(#gemini-f)">
                          <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                        </g>
                        <g filter="url(#gemini-g)">
                          <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                        </g>
                        <g filter="url(#gemini-h)">
                          <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                        </g>
                      </g>
                      <defs>
                        <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                        </filter>
                        <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                        <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                        <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                        <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                        <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                        <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                          <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                          <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                          <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                        </filter>
                      </defs>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"AI for documents and content workflows."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="false">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect"}
              </Button>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_m_" aria-checked="false" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_n_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="space-y-4">
              <div className="flex gap-4 items-start justify-between">
                <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-6" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                      <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-external-link opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Playlists and listening data for workspace apps."}
              </p>
            </FramePanel>
            <footer className="flex flex-row gap-(--frame-panel-footer-gap) items-center justify-between p-2">
              <Button type="button" tabIndex="0" aria-pressed="false">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect"}
              </Button>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_p_" aria-checked="false" size="default">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_q_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </footer>
          </Frame>
        </div>
      </div>
    </div>
  )
}
