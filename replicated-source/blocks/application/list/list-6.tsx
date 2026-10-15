import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Tabs className="max-w-md w-full" data-orientation="horizontal" activationDirection="none">
        <Frame className="@container w-full">
          <FramePanel className="flex gap-4 items-center justify-between p-3.5!">
            <h2 className="font-medium text-base text-foreground">
              {"Transactions"}
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
          <FramePanel className="p-4!">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_2_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
              <ul className="flex flex-col">
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="bg-[radial-gradient(circle,oklch(0.985_0.003_247/.14)_1px,transparent_1px)] bg-size-[4px_4px] bg-zinc-950 border-3 border-background dark:bg-zinc-900 dark:border overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-5" aria-hidden="true" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <p className="font-medium text-base text-foreground">
                        {"Received"}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          {"From:"}
                        </span>
                        <span className="text-foreground/85">
                          {"0x8a44...72Da"}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 text-right">
                      <span className="font-medium text-[#0B5C22] text-base">
                        {"+ 8.4910 AVAX"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="bg-[radial-gradient(circle,oklch(0.985_0.003_247/.14)_1px,transparent_1px)] bg-size-[4px_4px] bg-zinc-950 border-3 border-background dark:bg-zinc-900 dark:border overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
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
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <p className="font-medium text-base text-foreground">
                        {"Sent"}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          {"To:"}
                        </span>
                        <span className="text-foreground/85">
                          {"0x41c9...0B33"}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 text-right">
                      <span className="font-medium text-[#B88800] text-base">
                        {"- 0.342 BTC"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="bg-[radial-gradient(circle,oklch(0.985_0.003_247/.14)_1px,transparent_1px)] bg-size-[4px_4px] bg-zinc-950 border-3 border-background dark:bg-zinc-900 dark:border overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-5" aria-hidden="true" viewBox="0 0 36 36">
                          <g fill="none">
                            <circle fill="#8247E5" cx="18" cy="18" r="18"></circle>
                            <path d="M24.172 13.954c-.438-.25-1.002-.25-1.504 0l-3.509 2.068-2.38 1.316-3.447 2.068c-.439.25-1.003.25-1.504 0l-2.695-1.63a1.527 1.527 0 0 1-.752-1.315v-3.133c0-.502.25-1.003.752-1.316l2.695-1.567c.438-.25 1.002-.25 1.504 0l2.694 1.63c.439.25.752.751.752 1.315v2.068l2.381-1.378v-2.13c0-.502-.25-1.004-.752-1.317l-5.013-2.945c-.438-.25-1.002-.25-1.504 0l-5.138 3.008c-.501.25-.752.752-.752 1.253v5.89c0 .502.25 1.003.752 1.316l5.076 2.946c.438.25 1.002.25 1.504 0l3.446-2.006 2.381-1.378 3.447-2.006c.438-.25 1.002-.25 1.504 0l2.694 1.567c.439.25.752.752.752 1.316v3.133c0 .501-.25 1.003-.752 1.316l-2.632 1.567c-.438.25-1.002.25-1.504 0l-2.694-1.567a1.527 1.527 0 0 1-.752-1.316v-2.005L16.84 22.1v2.067c0 .502.25 1.003.752 1.316l5.075 2.946c.439.25 1.003.25 1.504 0l5.076-2.946c.439-.25.752-.752.752-1.316v-5.953c0-.5-.25-1.002-.752-1.316l-5.076-2.945z" fill="#FFF"></path>
                          </g>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <p className="font-medium text-base text-foreground">
                        {"Swapped"}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          {"On:"}
                        </span>
                        <span className="text-foreground/85">
                          {"Uniswap"}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 text-right">
                      <span className="font-medium text-[#0B5C22] text-base">
                        {"+ 42.8 MATIC"}
                      </span>
                      <span className="font-medium text-[#B88800] text-base">
                        {"- $280.00 USDT"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="bg-[radial-gradient(circle,oklch(0.985_0.003_247/.14)_1px,transparent_1px)] bg-size-[4px_4px] bg-zinc-950 border-3 border-background dark:bg-zinc-900 dark:border overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                          <defs>
                            <lineargradient id="eth-c" x1="50%" x2="50%" y1="0%" y2="100%">
                              <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                              <stop offset="100%" stopOpacity=".5"></stop>
                            </lineargradient>
                            <circle id="eth-b" cx="16" cy="15" r="15"></circle>
                            <filter id="eth-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterunits="objectBoundingBox">
                              <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                              <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                              <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                              <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                            </filter>
                            <path id="eth-e" d="M16.4977734,20.9675435 L23.9999473,16.616495 L16.4977207,26.9946245 L16.4976173,26.9943278 L9,16.6164144 L16.4977734,20.9674935 Z M16.4977471,3.00004297 L23.9954941,15.2198561 L16.4977734,19.5730917 L9,15.2198561 L16.4977471,3.00004297 Z"></path>
                            <filter id="eth-d" width="123.3%" height="114.6%" x="-11.7%" y="-5.2%" filterunits="objectBoundingBox">
                              <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                              <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                              <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                              <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"></fecolormatrix>
                            </filter>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <use fill="#000" filter="url(#eth-a)" xlinkHref="#eth-b"></use>
                            <use fill="#627EEA" xlinkHref="#eth-b"></use>
                            <use fill="url(#eth-c)" xlinkHref="#eth-b" style={{mixBlendMode: "soft-light"}}></use>
                            <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"></circle>
                            <g fillRule="nonzero">
                              <use fill="#000" filter="url(#eth-d)" xlinkHref="#eth-e"></use>
                              <use fill="#FFF" fillOpacity="0" fillRule="evenodd" xlinkHref="#eth-e"></use>
                            </g>
                            <g fill="#FFF" fillRule="nonzero" transform="translate(9 3)">
                              <polygon fillOpacity=".602" points="7.498 0 7.498 8.87 14.995 12.22"></polygon>
                              <polygon points="7.498 0 0 12.22 7.498 8.87"></polygon>
                              <polygon fillOpacity=".602" points="7.498 17.968 7.498 23.995 15 13.616"></polygon>
                              <polygon points="7.498 23.995 7.498 17.967 0 13.616"></polygon>
                              <polygon fillOpacity=".2" points="7.498 16.573 14.995 12.22 7.498 8.872"></polygon>
                              <polygon fillOpacity=".602" points="0 12.22 7.498 16.573 7.498 8.872"></polygon>
                            </g>
                          </g>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <p className="font-medium text-[#991930] text-base">
                        {"Failed"}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">
                          {"To:"}
                        </span>
                        <span className="text-foreground/85">
                          {"0x19e4...B7c2"}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 items-end shrink-0 text-right">
                      <span className="font-medium text-[#B88800] text-base">
                        {"- 1.24 ETH"}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </FramePanel>
          <FramePanel className="p-3.5!">
            <Button className="w-full" type="button" tabIndex="0">
              <svg className="lucide lucide-external-link opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              {"View All"}
            </Button>
          </FramePanel>
        </Frame>
      </Tabs>
    </div>
  )
}
