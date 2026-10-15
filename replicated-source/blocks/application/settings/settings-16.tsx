import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Integration settings
      </h1>
      <div className="flex flex-col gap-5 max-w-4xl w-full">
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-sm">
                Connected Apps
              </h3>
              <p className="text-muted-foreground text-sm">
                Manage source systems for automation, scheduling, support, and AI workflows.
              </p>
            </div>
            <Button className="sm:w-auto w-full" type="button" tabIndex="0" extracted="1">
              Build Connector
            </Button>
          </div>
          <Frame>
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py) sr-only">
              <div className="font-semibold text-sm">
                Integration Apps
              </div>
              <div className="text-muted-foreground text-sm">
                Available workspace apps and configuration actions.
              </div>
            </header>
            <FramePanel className="p-0!">
              <ItemGroup className="gap-0" role="list">
                <div>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <svg className="block size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Supabase
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          Connected
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Sync workspace records, owners, and lifecycle events from your product database.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Configure
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <svg className="block size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                            <g clipRule="evenodd" fillRule="evenodd">
                              <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                              <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                              <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                              <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                            </g>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Slack
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          Connected
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Route approvals, launch notes, and incident updates into selected team channels.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Configure
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <svg className="block size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                            <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Stripe
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          Connected
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Mirror subscription, invoice, and renewal signals into account reviews.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Configure
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <svg className="block size-5" aria-hidden="true" viewBox="0 0 512 512" fill="none">
                            <g clipPath="url(#clip0_5072_3766)">
                              <path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path>
                              <path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path>
                              <path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path>
                              <path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path>
                              <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path>
                              <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path>
                              <path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path>
                              <path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path>
                            </g>
                            <defs>
                              <clippath id="clip0_5072_3766">
                                <rect width="512" height="512" fill="white"></rect>
                              </clippath>
                            </defs>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Google Calendar
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                          Available
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Create planning reviews from milestones, customer dates, and release windows.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Install
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <span className="dark:hidden flex items-center justify-center leading-none size-5" aria-hidden="true">
                            <svg className="block size-5" viewBox="0 0 1800 1800" fill="none">
                              <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                            </svg>
                          </span>
                          <span className="dark:flex hidden items-center justify-center leading-none size-5" aria-hidden="true">
                            <svg className="block size-5" viewBox="0 0 1800 1800" fill="none">
                              <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                            </svg>
                          </span>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Resend
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                          Available
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Send branded transactional updates when workflows change status or ownership.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Install
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <span className="dark:hidden flex items-center justify-center leading-none size-5" aria-hidden="true">
                            <svg className="block size-5" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                              <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                            </svg>
                          </span>
                          <span className="dark:flex hidden items-center justify-center leading-none size-5" aria-hidden="true">
                            <svg className="block size-5" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                              <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                            </svg>
                          </span>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Cursor
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          Preview
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Attach implementation context and AI coding notes to active product tasks.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Configure
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <ItemSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
                  <Item className="px-3.5 py-2.5 sm:px-4" variant="default" size="default" role="listitem">
                    <ItemMedia className="self-center! translate-y-0!" variant="default">
                      <Item className="[&_svg]:block [&_svg]:size-5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="self-center! size-auto translate-y-0!" variant="icon">
                          <svg className="block size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                            <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          Claude
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          Preview
                        </Badge>
                      </ItemTitle>
                      <ItemDescription className="line-clamp-1">
                        Draft summaries, support notes, and rollout briefs from approved workspace data.
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions className="gap-2 justify-end ml-auto shrink-0">
                      <Button type="button" tabIndex="0">
                        Install
                      </Button>
                    </ItemActions>
                  </Item>
                </div>
              </ItemGroup>
            </FramePanel>
          </Frame>
        </section>
      </div>
    </main>
  )
}
