import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Tabs className="max-w-sm w-full" data-orientation="horizontal" activationDirection="none">
        <Frame className="@container w-full">
          <FramePanel className="flex items-center justify-between p-3.5!">
            <h2 className="font-medium text-base text-foreground">
              {"Portfolio Snapshot"}
            </h2>
            <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_2_">
                {"Weekly"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                {"All Time"}
              </TabsTrigger>
            </TabsList>
          </FramePanel>
          <FramePanel className="pb-4! pt-3! px-5!">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_2_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
              <ul className="flex flex-col">
                <li>
                  <div className="flex gap-2 items-center">
                    <svg className="size-9" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                      <defs>
                        <lineargradient id="btc-c" x1="50%" x2="50%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                          <stop offset="100%" stopOpacity=".5"></stop>
                        </lineargradient>
                        <circle id="btc-b" cx="16" cy="15" r="15"></circle>
                        <filter id="btc-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterunits="objectBoundingBox">
                          <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                          <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                          <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                          <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                        </filter>
                        <path id="btc-e" d="M23.1889526,13.0201846 C23.5025526,10.9239385 21.9064911,9.79704615 19.7240911,9.04529231 L20.4320295,6.20566154 L18.7035372,5.77489231 L18.0143065,8.53969231 C17.5599065,8.42646154 17.0931988,8.31963077 16.6294449,8.21378462 L17.3235988,5.43076923 L15.5960911,5 L14.8876603,7.83864615 C14.5115372,7.75298462 14.1423065,7.66830769 13.7839065,7.5792 L13.7858757,7.57033846 L11.4021218,6.97513846 L10.9423065,8.82129231 C10.9423065,8.82129231 12.224768,9.1152 12.1976911,9.13341538 C12.8977526,9.30818462 13.0242757,9.77144615 13.0031065,10.1387077 L12.1967065,13.3736615 C12.2449526,13.3859692 12.3074757,13.4036923 12.3763988,13.4312615 C12.3187988,13.4169846 12.2572603,13.4012308 12.1937526,13.3859692 L11.0634142,17.9176615 C10.9777526,18.1303385 10.7606449,18.4493538 10.2712911,18.3282462 C10.2885218,18.3533538 9.01492185,18.0146462 9.01492185,18.0146462 L8.15682954,19.9932308 L10.4061834,20.5539692 C10.8246449,20.6588308 11.2347372,20.7686154 11.6384295,20.872 L10.9231065,23.7441231 L12.6496295,24.1748923 L13.3580603,21.3332923 C13.8296911,21.4612923 14.2875372,21.5794462 14.7355372,21.6907077 L14.029568,24.5190154 L15.7580603,24.9497846 L16.4733834,22.0830769 C19.4208295,22.6408615 21.6371988,22.4158769 22.5701218,19.7500308 C23.3218757,17.6035692 22.5327065,16.3654154 20.9819372,15.5580308 C22.1112911,15.2976 22.9619988,14.5547077 23.1889526,13.0201846 L23.1889526,13.0201846 Z M19.2396603,18.5581538 C18.7055065,20.7046154 15.0914757,19.5442462 13.9197834,19.2532923 L14.8689526,15.4482462 C16.0406449,15.7406769 19.7979372,16.3196308 19.2396603,18.5581538 Z M19.7743065,12.9891692 C19.2869218,14.9416615 16.2789218,13.9496615 15.303168,13.7064615 L16.1637218,10.2553846 C17.1394757,10.4985846 20.2818757,10.9524923 19.7743065,12.9891692 Z"></path>
                        <filter id="btc-d" width="123.2%" height="117.5%" x="-11.6%" y="-6.3%" filterunits="objectBoundingBox">
                          <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                          <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                          <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"></fecolormatrix>
                        </filter>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <use fill="#000" filter="url(#btc-a)" xlinkHref="#btc-b"></use>
                        <use fill="#F7931A" xlinkHref="#btc-b"></use>
                        <use fill="url(#btc-c)" xlinkHref="#btc-b" style={{mixBlendMode: "soft-light"}}></use>
                        <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"></circle>
                        <g fillRule="nonzero">
                          <use fill="#000" filter="url(#btc-d)" xlinkHref="#btc-e"></use>
                          <use fill="#FFF" fillRule="evenodd" xlinkHref="#btc-e"></use>
                        </g>
                      </g>
                    </svg>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Bitcoin"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                        <span className="leading-4 text-muted-foreground text-sm">
                          {"$64,120"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                            <path d="M16 17h6v-6"></path>
                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                          </svg>
                          {"0.3%"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 shrink-0 text-right">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"$3,334"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"0.052 BTC"}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <svg className="size-9" aria-hidden="true" viewBox="0 0 339.43 295.27">
                      <path d="m62.15 1.45-61.89 130a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z" style={{fill: "rgb(80, 175, 149)", fillRule: "evenodd"}}></path>
                      <path d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12Zm0-39.25V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Zm0 0Z" style={{fill: "rgb(255, 255, 255)", fillRule: "evenodd"}}></path>
                    </svg>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Tether"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                        <span className="leading-4 text-muted-foreground text-sm">
                          {"$1.00"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          {"1.2%"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 shrink-0 text-right">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"$590"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"590 USDT"}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <svg className="size-9" aria-hidden="true" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <lineargradient id="c" x1="16" x2="16" y1="0" y2="30" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                          <stop offset="100%" stopOpacity=".5"></stop>
                        </lineargradient>
                        <filter id="a" width="1.08" height="1.0966667" x="-.04" y="-.04" filterunits="objectBoundingBox">
                          <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                          <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                          <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                          <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                        </filter>
                        <circle id="b" cx="16" cy="15" r="15"></circle>
                      </defs>
                      <use xlinkHref="#b" filter="url(#a)" style={{display: "inline", fillRule: "evenodd"}}></use>
                      <use xlinkHref="#b" fill="#627eea" style={{display: "inline", fill: "rgb(229, 229, 229)", fillOpacity: "1", fillRule: "evenodd"}}></use>
                      <use xlinkHref="#b" fill="url(#c)" style={{display: "inline", mixBlendMode: "soft-light", fill: "url(\"#c\")", fillRule: "evenodd"}}></use>
                      <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097" style={{display: "inline", fill: "none", fillRule: "evenodd"}}></circle>
                      <path d="m10.331859 23 7.221238-12.601771.99115 3.256638L13.022125 23h2.83186l3.539822-6.088495L20.951328 23H23.5l-2.40708-9.061945 1.699118-2.973453h-2.548674L19.252216 7h-2.407083L7.5 23Z" style={{fill: "rgb(0, 0, 0)", fillOpacity: "1", stroke: "none", strokeWidth: "0.141594", strokeOpacity: "1"}}></path>
                    </svg>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Algorand"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                        <span className="leading-4 text-muted-foreground text-sm">
                          {"$0.18"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                            <path d="M16 17h6v-6"></path>
                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                          </svg>
                          {"2.9%"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 shrink-0 text-right">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"$450"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"2,500 ALGO"}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <svg className="size-9" aria-hidden="true" viewBox="0 0 201 201" fill="none">
                      <path d="M100.517 200.483C155.745 200.483 200.517 155.712 200.517 100.483C200.517 45.2549 155.745 0.483337 100.517 0.483337C45.2882 0.483337 0.516663 45.2549 0.516663 100.483C0.516663 155.712 45.2882 200.483 100.517 200.483Z" fill="black"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M126.452 111.118L141.537 126.159L100.531 167.121L59.5688 126.159L74.6533 111.118L100.531 136.995L126.452 111.118ZM100.531 85.1965L115.832 100.498L100.531 115.799L85.2732 100.541V100.498L87.9607 97.8103L89.2611 96.5099L100.531 85.1965ZM48.949 85.4133L64.0335 100.498L48.949 115.539L33.8644 100.454L48.949 85.4133ZM152.113 85.4133L167.198 100.498L152.113 115.539L137.029 100.454L152.113 85.4133ZM100.531 33.8311L141.493 74.7934L126.409 89.8779L100.531 63.9568L74.6533 89.8346L59.5688 74.7934L100.531 33.8311Z" fill="#F3BA2F"></path>
                    </svg>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Binance"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                        <span className="leading-4 text-muted-foreground text-sm">
                          {"$320.40"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          {"1.7%"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0 shrink-0 text-right">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"$1,345.68"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"4.2 BNB"}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </FramePanel>
          <FramePanel className="p-3.5!">
            <Button className="text-foreground w-full" type="button" tabIndex="0">
              <svg className="lucide lucide-external-link opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              {"Add Asset"}
            </Button>
          </FramePanel>
        </Frame>
      </Tabs>
    </div>
  )
}
