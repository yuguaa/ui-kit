import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex flex-1 min-h-svh w-full">
      <div className="[--frame-pad-x:--spacing(4)] [--frame-pad-y:--spacing(4)] [--sidebar-width:100%] lg:[--frame-pad-x:--spacing(6)] lg:[--frame-pad-y:--spacing(6)] lg:[--sidebar-width:min(38vw,34rem)] min-h-svh overflow-x-clip relative sm:[--frame-pad-x:--spacing(5)] sm:[--frame-pad-y:--spacing(5)] w-full xl:[--frame-pad-x:--spacing(8)] xl:[--frame-pad-y:--spacing(8)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="[top:var(--frame-pad-y)] absolute bg-black/10 dark:bg-white/10 h-px inset-x-0"></div>
          <div className="[bottom:var(--frame-pad-y)] absolute bg-black/10 dark:bg-white/10 h-px inset-x-0"></div>
          <div className="[left:var(--frame-pad-x)] absolute bg-black/10 dark:bg-white/10 inset-y-0 w-px"></div>
          <div className="[right:var(--frame-pad-x)] absolute bg-black/10 dark:bg-white/10 inset-y-0 w-px"></div>
          <div className="-translate-x-1/2 -translate-y-1/2 [left:var(--frame-pad-x)] [top:var(--frame-pad-y)] absolute bg-background border border-black/10 dark:border-white/10 size-1.75 z-10" aria-hidden="true"></div>
          <div className="-translate-y-1/2 [right:var(--frame-pad-x)] [top:var(--frame-pad-y)] absolute bg-background border border-black/10 dark:border-white/10 size-1.75 translate-x-1/2 z-10" aria-hidden="true"></div>
          <div className="-translate-x-1/2 [bottom:var(--frame-pad-y)] [left:var(--frame-pad-x)] absolute bg-background border border-black/10 dark:border-white/10 size-1.75 translate-y-1/2 z-10" aria-hidden="true"></div>
          <div className="[bottom:var(--frame-pad-y)] [right:var(--frame-pad-x)] absolute bg-background border border-black/10 dark:border-white/10 size-1.75 translate-x-1/2 translate-y-1/2 z-10" aria-hidden="true"></div>
        </div>
        <div className="px-[var(--frame-pad-x)] py-[var(--frame-pad-y)] relative">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_var(--sidebar-width)] lg:min-h-[calc(100svh-(var(--frame-pad-y)*2))] min-h-[calc(100svh-(var(--frame-pad-y)*2))] w-full">
            <section className="flex justify-center lg:items-center min-w-0">
              <div className="flex justify-center lg:px-10 lg:py-10 px-5 py-6 sm:px-8 sm:py-8 w-full xl:px-12">
                <div className="flex flex-col items-center max-w-[26rem] text-center w-full">
                  <div className="flex flex-col gap-8 items-center w-full">
                    <Item className="bg-background border border-border p-0 size-10 text-foreground" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-col items-center max-w-[20rem] w-full">
                      <h1 className="font-medium leading-tight text-balance text-xl">
                        {"Log in to NeUI"}
                      </h1>
                      <div className="flex flex-col min-h-[23.5rem] mt-8 w-full">
                        <div className="gap-4 grid w-full">
                          <Button type="button" tabIndex="0">
                            {"Continue with Google"}
                          </Button>
                          <Button type="button" tabIndex="0">
                            {"Continue with email"}
                          </Button>
                          <Button type="button" tabIndex="0">
                            {"Continue with SAML SSO"}
                          </Button>
                          <Button type="button" tabIndex="0">
                            {"Log in with passkey"}
                          </Button>
                          <Button type="button" tabIndex="0">
                            {"Use backup code"}
                          </Button>
                        </div>
                        <p className="lg:whitespace-nowrap mt-6 text-muted-foreground text-sm">
                          {"Don't have an account?"}
                          <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                            {"Sign up"}
                          </a>
                          {"or"}
                          <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                            {"learn more"}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <aside className="bg-muted/25 border-0 border-black/10 dark:border-white/10 flex lg:border-l lg:min-h-0 lg:px-14 lg:py-12 min-h-[32rem] min-w-0 overflow-hidden px-8 py-10 relative sm:px-12">
              <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="[mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.96)_10%,rgba(0,0,0,0.96)_90%,transparent)] absolute h-full inset-0 inset-x-[-12%] inset-y-0 pointer-events-none w-[124%]" aria-hidden="true">
                  <svg className="absolute fill-primary/[0.04] h-full inset-0 stroke-border/45 w-full" aria-hidden="true">
                    <defs>
                      <pattern id="_r_0_" width="56" height="56" patternUnits="userSpaceOnUse" x="-1" y="-1">
                        <path d="M.5 56V.5H56" fill="none" strokeDasharray="0"></path>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#_r_0_)"></rect>
                    <svg className="overflow-visible" x="-1" y="-1">
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="169" y="1" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="449" y="1" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0.05644854952697642"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="337" y="57" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="113" y="57" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0.033701126609230414"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="393" y="1" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="337" y="1" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0.16317187968525104"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="169" y="57" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="57" y="57" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="225" y="57" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="169" y="505" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="449" y="449" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0.26241150408168323"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="113" y="449" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="57" y="505" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0.0334146227396559"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="337" y="449" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="225" y="449" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="337" y="505" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="225" y="505" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                      <rect className="fill-primary/[0.04] stroke-border/45" width="55" height="55" x="449" y="505" strokeWidth="1" vector-effect="non-scaling-stroke" opacity="0"></rect>
                    </svg>
                  </svg>
                  <div className="absolute inset-0">
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "169px", top: "1px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 228 120">
                        <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "449px", top: "1px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.891733)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                        <defs>
                          <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="#62F755"></stop>
                            <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                          </lineargradient>
                          <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                            <stop offset="0%" stopOpacity=".9"></stop>
                            <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                          </lineargradient>
                        </defs>
                        <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                        <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                        <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                        <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "337px", top: "57px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                        <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "113px", top: "57px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.885392)"}}>
                      <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <defs>
                          <lineargradient id="_r_3_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
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
                        <path fill="url(#_r_3_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                        <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "393px", top: "1px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                        <g clipRule="evenodd" fillRule="evenodd">
                          <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                          <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                          <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                          <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "337px", top: "1px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.912138)"}}>
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                          <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "169px", top: "57px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                        <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "57px", top: "57px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                          <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                          <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "225px", top: "57px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
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
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "169px", top: "505px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 296 298" fill="none">
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
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "449px", top: "449px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.921986)"}}>
                      <svg className="size-6" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                        <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "113px", top: "449px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                        <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                        <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                        <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "57px", top: "505px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.886646)"}}>
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                          <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                          <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "337px", top: "449px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                        <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "225px", top: "449px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6 text-foreground" aria-hidden="true" fill="currentColor" preserveAspectRatio="xMidYMid" viewBox="0 0 256 233">
                        <path d="M186.18182 0h46.54545v46.54545h-46.54545z"></path>
                        <path fill="#F7D046" d="M209.45454 0h46.54545v46.54545h-46.54545z"></path>
                        <path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"></path>
                        <path fill="#F7D046" d="M23.27273 0h46.54545v46.54545H23.27273z"></path>
                        <path fill="#F2A73B" d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"></path>
                        <path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"></path>
                        <path fill="#F2A73B" d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"></path>
                        <path fill="#EE792F" d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"></path>
                        <path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"></path>
                        <path fill="#EB5829" d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"></path>
                        <path fill="#EE792F" d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"></path>
                        <path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"></path>
                        <path fill="#EB5829" d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"></path>
                        <path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"></path>
                        <path fill="#EB5829" d="M23.27273 139.63636h46.54545v46.54545H23.27273z"></path>
                        <path fill="#EA3326" d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "337px", top: "505px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                        <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                      </svg>
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "225px", top: "505px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <svg className="size-6" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                    </div>
                    <div className="[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.08))] absolute flex items-center justify-center text-foreground" style={{left: "449px", top: "505px", width: "54px", height: "54px", opacity: "0", transform: "scale(0.88)"}}>
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-6" aria-hidden="true" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                          <title>
                            {"Anthropic"}
                          </title>
                          <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-6" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                          <title>
                            {"Anthropic"}
                          </title>
                          <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center min-h-full relative w-full z-10">
                <div className="flex flex-1 items-center justify-center max-w-none mx-auto w-full">
                  <div className="max-w-[30rem] w-full">
                    <div className="min-h-[20rem] relative">
                      <div className="[will-change:transform,opacity] absolute flex flex-col inset-0 items-center justify-center text-center" style={{opacity: "1", transform: "none"}}>
                        <div className="flex gap-1 items-center text-primary">
                          <svg className="fill-current lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <svg className="fill-current lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <svg className="fill-current lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <svg className="fill-current lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <svg className="fill-current lucide lucide-star size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                        <blockquote className="font-semibold leading-[1.4] max-w-[28rem] mt-6 text-balance text-xl">
                          {"“NeUI gave us a cleaner starting point, so the product felt polished much earlier in the sprint.”"}
                        </blockquote>
                        <div className="flex justify-center mt-5 w-full">
                          <div className="flex gap-1.5 items-center min-w-0">
                            <Avatar className="size-8" size="default">
                              <AvatarImage alt="Mina Park" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <div className="flex flex-col gap-0 items-start min-w-0 text-left">
                              <div className="font-medium text-sm">
                                {"Mina Park"}
                              </div>
                              <div className="flex gap-1 items-center text-muted-foreground text-xs">
                                <span>
                                  {"Product Design Lead"}
                                </span>
                                <Item className="border-0 p-0 scale-75 text-foreground/75 w-auto" variant="default" size="default">
                                  <ItemMedia className="size-auto" variant="icon">
                                    <span className="dark:hidden" aria-hidden="true">
                                      <svg className="size-[1.125rem]" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                        <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                      </svg>
                                    </span>
                                    <span className="dark:block hidden" aria-hidden="true">
                                      <svg className="size-[1.125rem]" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                        <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                      </svg>
                                    </span>
                                  </ItemMedia>
                                </Item>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
