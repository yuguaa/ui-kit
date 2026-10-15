import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-[31rem] w-full">
        <div className="gap-1 grid sm:grid-cols-2">
          <FramePanel className="flex flex-col min-h-38 p-0!">
            <div className="p-5">
              <div className="flex gap-3 items-start justify-between mb-3 min-w-0">
                <h3 className="text-muted-foreground text-sm">
                  {"Net worth"}
                </h3>
                <span className="leading-none text-muted-foreground text-xs">
                  {"1w"}
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="font-semibold text-2xl text-foreground">
                  {"$6.8M"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  {"+$185k"}
                </Badge>
              </div>
            </div>
            <div className="mt-auto w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-16 justify-center text-xs w-full" data-chart="chart-_r_0_" aria-label="Net worth trend" role="img">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_0_] {\n  --color-value: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_0_] {\n  --color-value: var(--color-emerald-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="240" height="64" style={{position: "relative", cursor: "default", width: "240px", height: "64px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="240" height="64" viewBox="0 0 240 64" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts1-clip">
                            <rect x="0" y="0" height="64" width="240"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="net-worth-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-value)" stopOpacity="0.18"></stop>
                            <stop offset="100%" stopColor="var(--color-value)" stopOpacity="0.02"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#net-worth-fill)" fillOpacity="0.6" height="64" stroke="none" width="240" id="recharts-area-_r_4_" d="M0,60.235L10.435,56.471L20.87,56.471L31.304,50.824L41.739,43.294L52.174,48.941L62.609,45.176L73.043,52.706L83.478,35.765L93.913,28.235L104.348,32L114.783,32L125.217,35.765L135.652,35.765L146.087,47.059L156.522,37.647L166.957,32L177.391,22.588L187.826,28.235L198.261,20.706L208.696,9.412L219.13,3.765L229.565,13.176L240,33.882L240,64L229.565,64L219.13,64L208.696,64L198.261,64L187.826,64L177.391,64L166.957,64L156.522,64L146.087,64L135.652,64L125.217,64L114.783,64L104.348,64L93.913,64L83.478,64L73.043,64L62.609,64L52.174,64L41.739,64L31.304,64L20.87,64L10.435,64L0,64Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="64" stroke="var(--color-value)" width="240" d="M0,60.235L10.435,56.471L20.87,56.471L31.304,50.824L41.739,43.294L52.174,48.941L62.609,45.176L73.043,52.706L83.478,35.765L93.913,28.235L104.348,32L114.783,32L125.217,35.765L135.652,35.765L146.087,47.059L156.522,37.647L166.957,32L177.391,22.588L187.826,28.235L198.261,20.706L208.696,9.412L219.13,3.765L229.565,13.176L240,33.882"></path>
                                </g>
                              </g>
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
              </ChartContainer>
            </div>
          </FramePanel>
          <FramePanel className="flex flex-col min-h-38 p-0!">
            <div className="p-5">
              <div className="flex gap-3 items-start justify-between mb-3 min-w-0">
                <h3 className="text-muted-foreground text-sm">
                  {"Portfolio"}
                </h3>
                <div className="flex gap-1 items-center shrink-0" aria-hidden="true">
                  <span className="contents" title="Google">
                    <svg className="shrink-0 size-3.5" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
                      <defs>
                        <lineargradient id="a">
                          <stop offset="0" stopColor="#0fbc5c"></stop>
                          <stop offset="1" stopColor="#0cba65"></stop>
                        </lineargradient>
                        <lineargradient id="g">
                          <stop offset=".231" stopColor="#0fbc5f"></stop>
                          <stop offset=".312" stopColor="#0fbc5f"></stop>
                          <stop offset=".366" stopColor="#0fbc5e"></stop>
                          <stop offset=".458" stopColor="#0fbc5d"></stop>
                          <stop offset=".54" stopColor="#12bc58"></stop>
                          <stop offset=".699" stopColor="#28bf3c"></stop>
                          <stop offset=".771" stopColor="#38c02b"></stop>
                          <stop offset=".861" stopColor="#52c218"></stop>
                          <stop offset=".915" stopColor="#67c30f"></stop>
                          <stop offset="1" stopColor="#86c504"></stop>
                        </lineargradient>
                        <lineargradient id="h">
                          <stop offset=".142" stopColor="#1abd4d"></stop>
                          <stop offset=".248" stopColor="#6ec30d"></stop>
                          <stop offset=".312" stopColor="#8ac502"></stop>
                          <stop offset=".366" stopColor="#a2c600"></stop>
                          <stop offset=".446" stopColor="#c8c903"></stop>
                          <stop offset=".54" stopColor="#ebcb03"></stop>
                          <stop offset=".616" stopColor="#f7cd07"></stop>
                          <stop offset=".699" stopColor="#fdcd04"></stop>
                          <stop offset=".771" stopColor="#fdce05"></stop>
                          <stop offset=".861" stopColor="#ffce0a"></stop>
                        </lineargradient>
                        <lineargradient id="f">
                          <stop offset=".316" stopColor="#ff4c3c"></stop>
                          <stop offset=".604" stopColor="#ff692c"></stop>
                          <stop offset=".727" stopColor="#ff7825"></stop>
                          <stop offset=".885" stopColor="#ff8d1b"></stop>
                          <stop offset="1" stopColor="#ff9f13"></stop>
                        </lineargradient>
                        <lineargradient id="b">
                          <stop offset=".231" stopColor="#ff4541"></stop>
                          <stop offset=".312" stopColor="#ff4540"></stop>
                          <stop offset=".458" stopColor="#ff4640"></stop>
                          <stop offset=".54" stopColor="#ff473f"></stop>
                          <stop offset=".699" stopColor="#ff5138"></stop>
                          <stop offset=".771" stopColor="#ff5b33"></stop>
                          <stop offset=".861" stopColor="#ff6c29"></stop>
                          <stop offset="1" stopColor="#ff8c18"></stop>
                        </lineargradient>
                        <lineargradient id="d">
                          <stop offset=".408" stopColor="#fb4e5a"></stop>
                          <stop offset="1" stopColor="#ff4540"></stop>
                        </lineargradient>
                        <lineargradient id="c">
                          <stop offset=".132" stopColor="#0cba65"></stop>
                          <stop offset=".21" stopColor="#0bb86d"></stop>
                          <stop offset=".297" stopColor="#09b479"></stop>
                          <stop offset=".396" stopColor="#08ad93"></stop>
                          <stop offset=".477" stopColor="#0aa6a9"></stop>
                          <stop offset=".568" stopColor="#0d9cc6"></stop>
                          <stop offset=".667" stopColor="#1893dd"></stop>
                          <stop offset=".769" stopColor="#258bf1"></stop>
                          <stop offset=".859" stopColor="#3086ff"></stop>
                        </lineargradient>
                        <lineargradient id="e">
                          <stop offset=".366" stopColor="#ff4e3a"></stop>
                          <stop offset=".458" stopColor="#ff8a1b"></stop>
                          <stop offset=".54" stopColor="#ffa312"></stop>
                          <stop offset=".616" stopColor="#ffb60c"></stop>
                          <stop offset=".771" stopColor="#ffcd0a"></stop>
                          <stop offset=".861" stopColor="#fecf0a"></stop>
                          <stop offset=".915" stopColor="#fecf08"></stop>
                          <stop offset="1" stopColor="#fdcd01"></stop>
                        </lineargradient>
                        <lineargradient xlinkHref="#a" id="s" x1="219.7" x2="254.467" y1="329.535" y2="329.535" gradientUnits="userSpaceOnUse"></lineargradient>
                        <radialgradient xlinkHref="#b" id="m" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#c" id="n" cx="45.259" cy="279.274" r="71.46" fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#d" id="l" cx="304.017" cy="118.009" r="47.854" fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#e" id="o" cx="181.001" cy="177.201" r="71.46" fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#f" id="p" cx="207.673" cy="108.097" r="41.102" fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#g" id="r" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <radialgradient xlinkHref="#h" id="j" cx="154.87" cy="145.969" r="71.46" fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"></radialgradient>
                        <filter id="q" width="1.097" height="1.116" x="-.048" y="-.058" color-interpolation-filters="sRGB">
                          <fegaussianblur stdDeviation="1.701"></fegaussianblur>
                        </filter>
                        <filter id="k" width="1.033" height="1.02" x="-.017" y="-.01" color-interpolation-filters="sRGB">
                          <fegaussianblur stdDeviation=".242"></fegaussianblur>
                        </filter>
                        <clippath id="i" clippathunits="userSpaceOnUse">
                          <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"></path>
                        </clippath>
                      </defs>
                      <g clipPath="url(#i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
                        <path fill="url(#j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#k)"></path>
                        <path fill="url(#l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#k)"></path>
                        <path fill="url(#m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#k)"></path>
                        <path fill="url(#n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#k)"></path>
                        <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#k)"></path>
                        <path fill="url(#o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#k)"></path>
                        <path fill="url(#p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#q)"></path>
                        <path fill="url(#r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#k)"></path>
                        <path fill="url(#s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#k)" opacity=".5"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="contents" title="Slack">
                    <svg className="shrink-0 size-3.5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="contents" title="Stripe">
                    <svg className="shrink-0 size-3.5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                      <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="font-semibold text-2xl text-foreground">
                  {"$4.2M"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                    <path d="M16 17h6v-6"></path>
                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                  </svg>
                  {"-$96k"}
                </Badge>
              </div>
            </div>
            <div className="mt-auto w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-16 justify-center text-xs w-full" data-chart="chart-_r_1_" aria-label="Portfolio trend" role="img">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_1_] {\n  --color-value: var(--color-rose-500);\n}\n\n\n.dark [data-chart=chart-_r_1_] {\n  --color-value: var(--color-rose-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="240" height="64" style={{position: "relative", cursor: "default", width: "240px", height: "64px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="240" height="64" viewBox="0 0 240 64" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts2-clip">
                            <rect x="0" y="0" height="64" width="240"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="portfolio-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-value)" stopOpacity="0.18"></stop>
                            <stop offset="100%" stopColor="var(--color-value)" stopOpacity="0.02"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_5_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#portfolio-fill)" fillOpacity="0.6" height="64" stroke="none" width="240" id="recharts-area-_r_5_" d="M0,5.333L10.435,29.333L20.87,29.333L31.304,42.667L41.739,34.667L52.174,58.667L62.609,58.667L73.043,58.667L83.478,58.667L93.913,48L104.348,42.667L114.783,29.333L125.217,29.333L135.652,37.333L146.087,37.333L156.522,37.333L166.957,56L177.391,21.333L187.826,21.333L198.261,21.333L208.696,32L219.13,42.667L229.565,42.667L240,32L240,64L229.565,64L219.13,64L208.696,64L198.261,64L187.826,64L177.391,64L166.957,64L156.522,64L146.087,64L135.652,64L125.217,64L114.783,64L104.348,64L93.913,64L83.478,64L73.043,64L62.609,64L52.174,64L41.739,64L31.304,64L20.87,64L10.435,64L0,64Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="64" stroke="var(--color-value)" width="240" d="M0,5.333L10.435,29.333L20.87,29.333L31.304,42.667L41.739,34.667L52.174,58.667L62.609,58.667L73.043,58.667L83.478,58.667L93.913,48L104.348,42.667L114.783,29.333L125.217,29.333L135.652,37.333L146.087,37.333L156.522,37.333L166.957,56L177.391,21.333L187.826,21.333L198.261,21.333L208.696,32L219.13,42.667L229.565,42.667L240,32"></path>
                                </g>
                              </g>
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
              </ChartContainer>
            </div>
          </FramePanel>
          <FramePanel className="flex flex-col min-h-38 p-0!">
            <div className="p-5">
              <div className="flex gap-3 items-start justify-between mb-3 min-w-0">
                <h3 className="text-muted-foreground text-sm">
                  {"Investments"}
                </h3>
                <div className="flex gap-1 items-center shrink-0" aria-hidden="true">
                  <span className="contents" title="OpenAI">
                    <span className="dark:hidden" aria-hidden="true">
                      <svg className="shrink-0 size-3.5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                        <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                      </svg>
                    </span>
                    <span className="dark:block hidden" aria-hidden="true">
                      <svg className="shrink-0 size-3.5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                        <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                      </svg>
                    </span>
                  </span>
                  <span className="contents" title="Bitcoin">
                    <svg className="shrink-0 size-3.5" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
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
                  </span>
                  <span className="contents" title="Binance">
                    <svg className="shrink-0 size-3.5" aria-hidden="true" viewBox="0 0 201 201" fill="none">
                      <path d="M100.517 200.483C155.745 200.483 200.517 155.712 200.517 100.483C200.517 45.2549 155.745 0.483337 100.517 0.483337C45.2882 0.483337 0.516663 45.2549 0.516663 100.483C0.516663 155.712 45.2882 200.483 100.517 200.483Z" fill="black"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M126.452 111.118L141.537 126.159L100.531 167.121L59.5688 126.159L74.6533 111.118L100.531 136.995L126.452 111.118ZM100.531 85.1965L115.832 100.498L100.531 115.799L85.2732 100.541V100.498L87.9607 97.8103L89.2611 96.5099L100.531 85.1965ZM48.949 85.4133L64.0335 100.498L48.949 115.539L33.8644 100.454L48.949 85.4133ZM152.113 85.4133L167.198 100.498L152.113 115.539L137.029 100.454L152.113 85.4133ZM100.531 33.8311L141.493 74.7934L126.409 89.8779L100.531 63.9568L74.6533 89.8346L59.5688 74.7934L100.531 33.8311Z" fill="#F3BA2F"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="font-semibold text-2xl text-foreground">
                  {"+0.14%"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 18V6"></path>
                  </svg>
                  {"+$89k"}
                </Badge>
              </div>
            </div>
            <div className="mt-auto w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-16 justify-center text-xs w-full" data-chart="chart-_r_2_" aria-label="Investments trend" role="img">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_2_] {\n  --color-value: var(--color-amber-500);\n}\n\n\n.dark [data-chart=chart-_r_2_] {\n  --color-value: var(--color-amber-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="240" height="64" style={{position: "relative", cursor: "default", width: "240px", height: "64px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="240" height="64" viewBox="0 0 240 64" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts3-clip">
                            <rect x="0" y="0" height="64" width="240"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="investments-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-value)" stopOpacity="0.18"></stop>
                            <stop offset="100%" stopColor="var(--color-value)" stopOpacity="0.02"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_6_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#investments-fill)" fillOpacity="0.6" height="64" stroke="none" width="240" id="recharts-area-_r_6_" d="M0,42.667L10.435,42.667L20.87,56.889L31.304,39.111L41.739,32L52.174,28.444L62.609,46.222L73.043,35.556L83.478,7.111L93.913,7.111L104.348,24.889L114.783,32L125.217,39.111L135.652,39.111L146.087,49.778L156.522,49.778L166.957,42.667L177.391,21.333L187.826,39.111L198.261,39.111L208.696,17.778L219.13,17.778L229.565,28.444L240,10.667L240,64L229.565,64L219.13,64L208.696,64L198.261,64L187.826,64L177.391,64L166.957,64L156.522,64L146.087,64L135.652,64L125.217,64L114.783,64L104.348,64L93.913,64L83.478,64L73.043,64L62.609,64L52.174,64L41.739,64L31.304,64L20.87,64L10.435,64L0,64Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="64" stroke="var(--color-value)" width="240" d="M0,42.667L10.435,42.667L20.87,56.889L31.304,39.111L41.739,32L52.174,28.444L62.609,46.222L73.043,35.556L83.478,7.111L93.913,7.111L104.348,24.889L114.783,32L125.217,39.111L135.652,39.111L146.087,49.778L156.522,49.778L166.957,42.667L177.391,21.333L187.826,39.111L198.261,39.111L208.696,17.778L219.13,17.778L229.565,28.444L240,10.667"></path>
                                </g>
                              </g>
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
              </ChartContainer>
            </div>
          </FramePanel>
          <FramePanel className="flex flex-col min-h-38 p-0!">
            <div className="p-5">
              <div className="flex gap-3 items-start justify-between mb-3 min-w-0">
                <h3 className="text-muted-foreground text-sm">
                  {"Cashflow"}
                </h3>
                <span className="leading-none text-muted-foreground text-xs">
                  {"1w"}
                </span>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="font-semibold text-2xl text-foreground">
                  {"$320k"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                  {"+$73k"}
                </Badge>
              </div>
            </div>
            <div className="mt-auto w-full">
              <ChartContainer>
              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto cn-chart flex h-16 justify-center text-xs w-full" data-chart="chart-_r_3_" aria-label="Cashflow trend" role="img">
                <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_3_] {\n  --color-value: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_3_] {\n  --color-value: var(--color-emerald-500);\n}\n" }} />
                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                    <div className="recharts-wrapper" width="240" height="64" style={{position: "relative", cursor: "default", width: "240px", height: "64px"}}>
                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                      <svg className="recharts-surface" role="application" tabIndex="0" width="240" height="64" viewBox="0 0 240 64" style={{width: "100%", height: "100%", display: "block"}}>
                        <title></title>
                        <desc></desc>
                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                        <defs>
                          <clippath id="recharts4-clip">
                            <rect x="0" y="0" height="64" width="240"></rect>
                          </clippath>
                        </defs>
                        <defs>
                          <lineargradient id="cashflow-fill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-value)" stopOpacity="0.18"></stop>
                            <stop offset="100%" stopColor="var(--color-value)" stopOpacity="0.02"></stop>
                          </lineargradient>
                        </defs>
                        <g className="recharts-zIndex-layer_100" tabIndex="-1">
                          <g className="recharts-area recharts-layer">
                            <g className="recharts-layer">
                              <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_7_)">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#cashflow-fill)" fillOpacity="0.6" height="64" stroke="none" width="240" id="recharts-area-_r_7_" d="M0,17.455L10.435,29.091L20.87,11.636L31.304,11.636L41.739,43.636L52.174,43.636L62.609,55.273L73.043,55.273L83.478,43.636L93.913,34.909L104.348,34.909L114.783,37.818L125.217,29.091L135.652,17.455L146.087,8.727L156.522,43.636L166.957,46.545L177.391,58.182L187.826,26.182L198.261,29.091L208.696,17.455L219.13,17.455L229.565,17.455L240,5.818L240,64L229.565,64L219.13,64L208.696,64L198.261,64L187.826,64L177.391,64L166.957,64L156.522,64L146.087,64L135.652,64L125.217,64L114.783,64L104.348,64L93.913,64L83.478,64L73.043,64L62.609,64L52.174,64L41.739,64L31.304,64L20.87,64L10.435,64L0,64Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="64" stroke="var(--color-value)" width="240" d="M0,17.455L10.435,29.091L20.87,11.636L31.304,11.636L41.739,43.636L52.174,43.636L62.609,55.273L73.043,55.273L83.478,43.636L93.913,34.909L104.348,34.909L114.783,37.818L125.217,29.091L135.652,17.455L146.087,8.727L156.522,43.636L166.957,46.545L177.391,58.182L187.826,26.182L198.261,29.091L208.696,17.455L219.13,17.455L229.565,17.455L240,5.818"></path>
                                </g>
                              </g>
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
              </ChartContainer>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
