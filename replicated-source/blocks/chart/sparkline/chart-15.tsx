import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 min-h-svh p-10 w-full">
      <div className="@container max-w-6xl w-full">
        <div className="@3xl:grid-cols-3 gap-4 grid grid-cols-1">
          <Frame>
            <FramePanel className="space-y-5">
              <div className="flex gap-2 items-center">
                <span className="[&_svg]:size-5" style={{color: "var(--color-emerald-500)"}}>
                  <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 18V6"></path>
                  </svg>
                </span>
                <span className="font-semibold text-sm">
                  {"Revenue"}
                </span>
              </div>
              <div className="flex gap-2.5 items-end justify-between">
                <div className="flex flex-col gap-px pb-2">
                  <div className="text-muted-foreground text-xs whitespace-nowrap">
                    {"Last 28 days"}
                  </div>
                  <div className="font-semibold text-foreground text-xl tracking-tight">
                    {"6.238$"}
                  </div>
                </div>
                <div className="h-16 max-w-40 relative w-full">
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts1-clip">
                              <rect x="5" y="5" height="54" width="150"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-emerald-500)" stopOpacity="0.3"></stop>
                              <stop offset="100%" stopColor="var(--color-emerald-500)" stopOpacity="0.05"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#revenueGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_0_" d="M5,52.25C8.571,40.438,12.143,28.625,15.714,28.625C19.286,28.625,22.857,45.5,26.429,45.5C30,45.5,33.571,23.9,37.143,23.9C40.714,23.9,44.286,48.875,47.857,48.875C51.429,48.875,55,17.825,58.571,17.825C62.143,17.825,65.714,38.75,69.286,38.75C72.857,38.75,76.429,13.1,80,13.1C83.571,13.1,87.143,41,90.714,45.5C94.286,50,97.857,52.25,101.429,52.25C105,52.25,108.571,32,112.143,32C115.714,32,119.286,45.5,122.857,45.5C126.429,45.5,130,38.75,133.571,38.75C137.143,38.75,140.714,45.5,144.286,45.5C147.857,45.5,151.429,31.197,155,16.893L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-emerald-500)" width="150" d="M5,52.25C8.571,40.438,12.143,28.625,15.714,28.625C19.286,28.625,22.857,45.5,26.429,45.5C30,45.5,33.571,23.9,37.143,23.9C40.714,23.9,44.286,48.875,47.857,48.875C51.429,48.875,55,17.825,58.571,17.825C62.143,17.825,65.714,38.75,69.286,38.75C72.857,38.75,76.429,13.1,80,13.1C83.571,13.1,87.143,41,90.714,45.5C94.286,50,97.857,52.25,101.429,52.25C105,52.25,108.571,32,112.143,32C115.714,32,119.286,45.5,122.857,45.5C126.429,45.5,130,38.75,133.571,38.75C137.143,38.75,140.714,45.5,144.286,45.5C147.857,45.5,151.429,31.197,155,16.893"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="space-y-5">
              <div className="flex gap-2 items-center">
                <span className="[&_svg]:size-5" style={{color: "var(--color-blue-500)"}}>
                  <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                </span>
                <span className="font-semibold text-sm">
                  {"New Customers"}
                </span>
              </div>
              <div className="flex gap-2.5 items-end justify-between">
                <div className="flex flex-col gap-px pb-2">
                  <div className="text-muted-foreground text-xs whitespace-nowrap">
                    {"Last 28 days"}
                  </div>
                  <div className="font-semibold text-foreground text-xl tracking-tight">
                    {"6.202"}
                  </div>
                </div>
                <div className="h-16 max-w-40 relative w-full">
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts2-clip">
                              <rect x="5" y="5" height="54" width="150"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="0.3"></stop>
                              <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0.05"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#customersGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_1_" d="M5,45.5C8.571,37.063,12.143,28.625,15.714,28.625C19.286,28.625,22.857,45.5,26.429,45.5C30,45.5,33.571,23.9,37.143,23.9C40.714,23.9,44.286,48.875,47.857,48.875C51.429,48.875,55,24.575,58.571,24.575C62.143,24.575,65.714,42.125,69.286,42.125C72.857,42.125,76.429,13.1,80,13.1C83.571,13.1,87.143,43.25,90.714,46.85C94.286,50.45,97.857,52.25,101.429,52.25C105,52.25,108.571,38.75,112.143,38.75C115.714,38.75,119.286,45.5,122.857,45.5C126.429,45.5,130,40.775,133.571,40.775C137.143,40.775,140.714,45.5,144.286,45.5C147.857,45.5,151.429,37.947,155,30.393L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-blue-500)" width="150" d="M5,45.5C8.571,37.063,12.143,28.625,15.714,28.625C19.286,28.625,22.857,45.5,26.429,45.5C30,45.5,33.571,23.9,37.143,23.9C40.714,23.9,44.286,48.875,47.857,48.875C51.429,48.875,55,24.575,58.571,24.575C62.143,24.575,65.714,42.125,69.286,42.125C72.857,42.125,76.429,13.1,80,13.1C83.571,13.1,87.143,43.25,90.714,46.85C94.286,50.45,97.857,52.25,101.429,52.25C105,52.25,108.571,38.75,112.143,38.75C115.714,38.75,119.286,45.5,122.857,45.5C126.429,45.5,130,40.775,133.571,40.775C137.143,40.775,140.714,45.5,144.286,45.5C147.857,45.5,151.429,37.947,155,30.393"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="space-y-5">
              <div className="flex gap-2 items-center">
                <span className="[&_svg]:size-5" style={{color: "var(--color-violet-500)"}}>
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </span>
                <span className="font-semibold text-sm">
                  {"Active Users"}
                </span>
              </div>
              <div className="flex gap-2.5 items-end justify-between">
                <div className="flex flex-col gap-px pb-2">
                  <div className="text-muted-foreground text-xs whitespace-nowrap">
                    {"Last 28 days"}
                  </div>
                  <div className="font-semibold text-foreground text-xl tracking-tight">
                    {"18.945"}
                  </div>
                </div>
                <div className="h-16 max-w-40 relative w-full">
                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                    <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                      <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                        <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                          <title></title>
                          <desc></desc>
                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                          <defs>
                            <clippath id="recharts3-clip">
                              <rect x="5" y="5" height="54" width="150"></rect>
                            </clippath>
                          </defs>
                          <defs>
                            <lineargradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.3"></stop>
                              <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0.05"></stop>
                            </lineargradient>
                          </defs>
                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                            <g className="recharts-area recharts-layer">
                              <g className="recharts-layer">
                                <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#usersGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2_" d="M5,41C8.571,34.25,12.143,27.5,15.714,27.5C19.286,27.5,22.857,41,26.429,41C30,41,33.571,12.2,37.143,12.2C40.714,12.2,44.286,48.2,47.857,48.2C51.429,48.2,55,22.1,58.571,22.1C62.143,22.1,65.714,27.5,69.286,27.5C72.857,27.5,76.429,6.8,80,6.8C83.571,6.8,87.143,33.8,90.714,41C94.286,48.2,97.857,51.8,101.429,51.8C105,51.8,108.571,32,112.143,32C115.714,32,119.286,50,122.857,50C126.429,50,130,23,133.571,23C137.143,23,140.714,41,144.286,41C147.857,41,151.429,30.929,155,20.858L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-violet-500)" width="150" d="M5,41C8.571,34.25,12.143,27.5,15.714,27.5C19.286,27.5,22.857,41,26.429,41C30,41,33.571,12.2,37.143,12.2C40.714,12.2,44.286,48.2,47.857,48.2C51.429,48.2,55,22.1,58.571,22.1C62.143,22.1,65.714,27.5,69.286,27.5C72.857,27.5,76.429,6.8,80,6.8C83.571,6.8,87.143,33.8,90.714,41C94.286,48.2,97.857,51.8,101.429,51.8C105,51.8,108.571,32,112.143,32C115.714,32,119.286,50,122.857,50C126.429,50,130,23,133.571,23C137.143,23,140.714,41,144.286,41C147.857,41,151.429,30.929,155,20.858"></path>
                              </g>
                            </g>
                          </g>
                          <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                          <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
