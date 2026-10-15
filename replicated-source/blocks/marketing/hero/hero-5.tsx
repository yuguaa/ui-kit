import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-[#090b0c] flex items-center lg:px-8 min-h-svh overflow-hidden px-4 py-12 relative sm:px-6 w-full" aria-labelledby="hero-5-title">
        <svg className="absolute inset-0 pointer-events-none size-full" aria-hidden="true">
          <defs>
            <pattern id="_r_0_-dots" patternUnits="userSpaceOnUse" width={6} height={6}>
              <circle cx={1} cy={1} r={0.55} fill="white"></circle>
            </pattern>
            <radialgradient id="_r_0_-fade" cx="30%" cy="20%" r="120%">
              <stop offset="0%" stopColor="white" stopOpacity={0.85}></stop>
              <stop offset="60%" stopColor="white" stopOpacity={0.5}></stop>
              <stop offset="100%" stopColor="white" stopOpacity={0}></stop>
            </radialgradient>
            <mask id="_r_0_-mask">
              <rect width="100%" height="100%" fill="url(#_r_0_-fade)"></rect>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#_r_0_-dots)" fillOpacity={0.18} mask="url(#_r_0_-mask)"></rect>
        </svg>
        <div className="-left-32 -top-30 absolute bg-white/3 blur-[100px] pointer-events-none rounded-full size-125" aria-hidden="true"></div>
        <div className="gap-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:max-w-7xl max-w-[624px] mx-auto relative w-full">
          <div className="@container flex flex-col gap-7 items-start justify-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-white/10 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-[#fafafa] text-sm transition-shadow">
              {"Your Ecosystem"}
            </Badge>
            <h1 className="@md:text-4xl @xl:text-5xl font-semibold leading-none text-3xl text-[#fafafa] tracking-tight" id="hero-5-title">
              <span className="@xl:block">
                {"Connect Your"}
              </span>
              <span className="@xl:block">
                {"Developer Stack"}
              </span>
            </h1>
            <p className="leading-6 max-w-md text-[#a1a1a1] text-base">
              {"Connect your development tools through MCP and give AI agents access to the services they need across your workflow."}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button className="bg-blue-600 hover:bg-blue-500 shadow-xs text-white" href="#" role="button" tabIndex={0}>
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                {"Connect MCP"}
              </Button>
              <Button className="bg-white/10 border-transparent hover:bg-white/15 hover:text-white text-[#fafafa]" href="#" role="button" tabIndex={0}>
                <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                  <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                  <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                  <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                  <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                </svg>
                {"Browse integrations"}
              </Button>
            </div>
            <Separator className="bg-white/10 max-w-md w-full" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 items-center">
              <li className="flex gap-1.5 items-center">
                <svg className="lucide lucide-circle-check shrink-0 size-4 text-[#00bc7d]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="leading-5 text-[#fafafa] text-sm">
                  {"Live integrations"}
                </span>
              </li>
              <li className="flex gap-1.5 items-center">
                <svg className="lucide lucide-circle-check shrink-0 size-4 text-[#00bc7d]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="leading-5 text-[#fafafa] text-sm">
                  {"Agent ready"}
                </span>
              </li>
              <li className="flex gap-1.5 items-center">
                <svg className="lucide lucide-circle-check shrink-0 size-4 text-[#00bc7d]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="leading-5 text-[#fafafa] text-sm">
                  {"Open standards"}
                </span>
              </li>
            </ul>
          </div>
          <div className="@container lg:justify-self-end lg:max-w-[624px] w-full">
            <div className="aspect-[624/600] relative w-full">
              <div className="[transform:scale(calc(100cqw/624px))] absolute left-0 origin-top-left top-0" role="img" aria-label="Isometric grid of connected integrations, each on its own tile" style={{width: "624px", height: "600px"}}>
                <svg className="absolute inset-0 overflow-visible size-full" aria-hidden="true" viewBox="0 0 624 600">
                  <defs>
                    <pattern id="_r_1_-grid" patternUnits="userSpaceOnUse" width={50} height={50}>
                      <rect width={50} height={50} fill="none" stroke="white"></rect>
                    </pattern>
                    <filter id="_r_1_-blur" x="-50%" y="-50%" width="200%" height="200%">
                      <fegaussianblur stdDeviation="100"></fegaussianblur>
                    </filter>
                    <mask id="_r_1_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={800} height={800}>
                      <rect width={800} height={800} fill="url(#_r_1_-grid)" fillOpacity={0.1}></rect>
                    </mask>
                    <lineargradient id="_r_1_-fade1" gradientUnits="userSpaceOnUse" x1={94} y1={125} x2={183} y2={425}>
                      <stop stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.08} stopColor="white"></stop>
                      <stop offset={0.92} stopColor="white"></stop>
                      <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                    </lineargradient>
                    <lineargradient id="_r_1_-fade2" gradientUnits="userSpaceOnUse" x1={-78} y1={275} x2={-53.53} y2={380.41}>
                      <stop stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.08} stopColor="white"></stop>
                      <stop offset={0.92} stopColor="white"></stop>
                      <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                    </lineargradient>
                    <lineargradient id="_r_1_-fade3" gradientUnits="userSpaceOnUse" x1={354} y1={75} x2={417.52} y2={331.62}>
                      <stop stopColor="white" stopOpacity={0}></stop>
                      <stop offset={0.08} stopColor="white"></stop>
                      <stop offset={0.92} stopColor="white"></stop>
                      <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                    </lineargradient>
                  </defs>
                  <g transform="translate(311.82 300)">
                    <g transform="matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                      <g transform="translate(-400 -400)">
                        <g mask="url(#_r_1_-mask)">
                          <circle cx={400} cy={400} r={300} fill="white" filter="url(#_r_1_-blur)"></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                  <line x1={95.31} y1={125} x2={138.6113} y2={150} stroke="url(#_r_1_-fade1)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.3725281203733175}></line>
                  <line x1={138.61} y1={250} x2={181.9113} y2={275} stroke="url(#_r_1_-fade1)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.6}></line>
                  <line x1={138.61} y1={350} x2={181.9113} y2={375} stroke="url(#_r_1_-fade1)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={95.31} y1={175} x2={138.6113} y2={150} stroke="url(#_r_1_-fade1)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.6}></line>
                  <line x1={138.61} y1={300} x2={181.9113} y2={275} stroke="url(#_r_1_-fade1)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={571.63} y1={200} x2={614.9313} y2={225} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={311.82} y1={250} x2={355.1213} y2={275} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={-77.89} y1={275} x2={-34.5887} y2={300} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={355.12} y1={275} x2={485.0239} y2={200} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={181.92} y1={275} x2={225.22129999999999} y2={250} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={-34.59} y1={300} x2={8.711299999999994} y2={275} stroke="url(#_r_1_-fade2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.2475046966588707}></line>
                  <line x1={355.12} y1={75} x2={398.4213} y2={100} stroke="url(#_r_1_-fade3)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.15}></line>
                  <line x1={398.42} y1={250} x2={441.72130000000004} y2={275} stroke="url(#_r_1_-fade3)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity={0.6}></line>
                  <g transform="translate(401.277 374) matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                    <text textAnchor="middle" dominantBaseline="central" fontSize="36" fontWeight="400" fill="#d0d6d8" fillOpacity={0.9}>
                      {"Built for Every Stack"}
                    </text>
                  </g>
                </svg>
                <div className="absolute" style={{left: "52px", top: "145px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-1.42762px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 2447.6 2452.5">
                          <g clipRule="evenodd" fillRule="evenodd">
                            <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                            <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                            <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                            <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "182px", top: "120px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-5.74697px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 109 113" fill="none">
                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity={0.2}></path>
                          <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                          <defs>
                            <lineargradient id="supabase-paint0_linear" x1={53.9738} y1={54.974} x2={94.1635} y2={71.8295} gradientUnits="userSpaceOnUse">
                              <stop stopColor="#249361"></stop>
                              <stop offset={1} stopColor="#3ECF8E"></stop>
                            </lineargradient>
                            <lineargradient id="supabase-paint1_linear" x1={36.1558} y1={30.578} x2={54.4844} y2={65.0806} gradientUnits="userSpaceOnUse">
                              <stop></stop>
                              <stop offset={1} stopOpacity={0}></stop>
                            </lineargradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "225px", top: "195px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-2.01669px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                          <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                          <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                          <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                          <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                          <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                          <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                          <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                          <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                          <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "95px", top: "220px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-3.38359px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 24 24" fill="#008fe2">
                          <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "-35px", top: "245px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-5.69317px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="28 28 128 132" fill="none">
                          <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                          <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                          <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "138px", top: "295px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-2.16402px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 228 120">
                          <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "269px", top: "270px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-0.0775052px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                          <defs>
                            <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                              <stop offset="0%" stopColor="#62F755"></stop>
                              <stop offset="100%" stopColor="#8FF986" stopOpacity={0}></stop>
                            </lineargradient>
                            <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                              <stop offset="0%" stopOpacity=".9"></stop>
                              <stop offset="100%" stopColor="#1A1A1A" stopOpacity={0}></stop>
                            </lineargradient>
                          </defs>
                          <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "9px", top: "320px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-3.60493px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg fill="none" viewBox="0 0 128 128">
                          <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                          <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "355px", top: "170px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-5.07729px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                          <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "312px", top: "95px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-0.518051px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                          <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute" style={{left: "485px", top: "145px", width: "86.6025px", height: "50px"}}>
                  <div className="absolute left-0" style={{top: "25px", opacity: "1", transform: "none"}}>
                    <div style={{transform: "translateY(-4.32268px)"}}>
                      <div className="absolute origin-top-left" aria-hidden="true" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.154px 1.154px 0px 0px, rgb(5, 5, 5) -2.308px 2.308px 0px 0px, rgb(5, 5, 5) -3.462px 3.462px 0px 0px, rgb(5, 5, 5) -4.615px 4.615px 0px 0px, rgb(5, 5, 5) -5.769px 5.769px 0px 0px, rgb(5, 5, 5) -6.923px 6.923px 0px 0px, rgb(5, 5, 5) -8.077px 8.077px 0px 0px, rgb(5, 5, 5) -9.231px 9.231px 0px 0px, rgb(5, 5, 5) -10.385px 10.385px 0px 0px, rgb(5, 5, 5) -11.538px 11.538px 0px 0px, rgb(5, 5, 5) -12.692px 12.692px 0px 0px, rgb(5, 5, 5) -13.846px 13.846px 0px 0px, rgb(5, 5, 5) -15px 15px 0px 0px, rgb(5, 5, 5) -16.154px 16.154px 0px 0px, rgb(5, 5, 5) -17.308px 17.308px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.615px 19.615px 0px 0px, rgb(5, 5, 5) -20.769px 20.769px 0px 0px, rgb(5, 5, 5) -21.923px 21.923px 0px 0px, rgb(5, 5, 5) -23.077px 23.077px 0px 0px, rgb(5, 5, 5) -24.231px 24.231px 0px 0px, rgb(5, 5, 5) -25.385px 25.385px 0px 0px, rgb(5, 5, 5) -26.538px 26.538px 0px 0px, rgb(5, 5, 5) -27.692px 27.692px 0px 0px, rgb(5, 5, 5) -28.846px 28.846px 0px 0px, rgb(43, 43, 43) -30px 30px 0px 0.5px", opacity: "0.7"}}></div>
                      <div className="absolute origin-top-left" style={{width: "50px", height: "50px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "0.5px solid rgb(43, 43, 43)"}}></div>
                      <div className="[&_svg]:size-full absolute origin-top-left" aria-hidden="true" style={{left: "22.5166px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <svg viewBox="0 0 20 24" fill="none">
                          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5V8H1.5C0.671573 8 0 7.32843 0 6.5V1.5Z" fill="#F26207"></path>
                          <path d="M10 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H10V8Z" fill="#F26207"></path>
                          <path d="M0 17.5C0 16.6716 0.671573 16 1.5 16H10V22.5C10 23.3284 9.32843 24 8.5 24H1.5C0.671573 24 0 23.3284 0 22.5V17.5Z" fill="#F26207"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <svg className="absolute inset-0 overflow-visible pointer-events-none size-full" aria-hidden="true" viewBox="0 0 624 600"></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
