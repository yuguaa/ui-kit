import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-muted/30 flex items-start justify-center lg:p-10 min-h-svh p-4 pb-20 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Concierge checkout
      </h1>
      <Stepper className="lg:px-8 lg:py-10 max-w-5xl mx-auto px-4 py-8 sm:px-6" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
        <header className="flex flex-col gap-6 lg:flex-row lg:gap-10 lg:items-end lg:justify-between">
          <div className="min-w-0 shrink-0">
            <Button className="-ml-3 gap-1 h-auto hover:text-foreground mb-1 px-3 py-1 text-muted-foreground w-fit" type="button" tabIndex="0" extracted="1">
              ← Back to cart
            </Button>
            <h1 className="font-semibold text-2xl tracking-tight">
              Checkout
            </h1>
            <p className="gap-1.5 inline-flex items-center leading-5 mt-1 text-muted-foreground text-sm">
              <span>
                4 items
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="tabular-nums">
                $364.31
              </span>
            </p>
          </div>
          <StepperNav className="gap-3 lg:max-w-xl sm:gap-4 w-full" data-state="1" data-orientation="horizontal">
            <StepperItem className="flex-1 items-start relative" data-state="active">
              <StepperTrigger className="flex flex-col gap-3 grow items-start justify-center" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                <StepperIndicator className="bg-border h-1 w-full" data-state="active">
                  <div className="absolute">
                    <span className="sr-only">
                      1
                    </span>
                  </div>
                </StepperIndicator>
                <StepperTitle className="font-semibold group-data-[state=inactive]/step:text-muted-foreground text-start" data-state="active">
                  Customer
                </StepperTitle>
              </StepperTrigger>
            </StepperItem>
            <StepperItem className="flex-1 items-start relative" data-state="inactive">
              <StepperTrigger className="flex flex-col gap-3 grow items-start justify-center" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" disabled>
                <StepperIndicator className="bg-border h-1 w-full" data-state="inactive">
                  <div className="absolute">
                    <span className="sr-only">
                      2
                    </span>
                  </div>
                </StepperIndicator>
                <StepperTitle className="font-semibold group-data-[state=inactive]/step:text-muted-foreground text-start" data-state="inactive">
                  Address
                </StepperTitle>
              </StepperTrigger>
            </StepperItem>
            <StepperItem className="flex-1 items-start relative" data-state="inactive">
              <StepperTrigger className="flex flex-col gap-3 grow items-start justify-center" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" disabled>
                <StepperIndicator className="bg-border h-1 w-full" data-state="inactive">
                  <div className="absolute">
                    <span className="sr-only">
                      3
                    </span>
                  </div>
                </StepperIndicator>
                <StepperTitle className="font-semibold group-data-[state=inactive]/step:text-muted-foreground text-start" data-state="inactive">
                  Delivery
                </StepperTitle>
              </StepperTrigger>
            </StepperItem>
            <StepperItem className="flex-1 items-start relative" data-state="inactive">
              <StepperTrigger className="flex flex-col gap-3 grow items-start justify-center" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false" disabled>
                <StepperIndicator className="bg-border h-1 w-full" data-state="inactive">
                  <div className="absolute">
                    <span className="sr-only">
                      4
                    </span>
                  </div>
                </StepperIndicator>
                <StepperTitle className="font-semibold group-data-[state=inactive]/step:text-muted-foreground text-start" data-state="inactive">
                  Payment
                </StepperTitle>
              </StepperTrigger>
            </StepperItem>
          </StepperNav>
        </header>
        <form className="gap-0 grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start min-w-0 mt-8" aria-label="Checkout">
          <div className="flex flex-col lg:pr-10 min-w-0">
            <StepperPanel data-state="1">
              <StepperContent data-state="1">
                <section className="flex flex-col gap-5 min-w-0" aria-labelledby="checkout-7-contact-title">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h2 className="font-semibold text-base" id="checkout-7-contact-title">
                        Customer
                      </h2>
                    </div>
                    <span className="gap-1 inline-flex items-center shrink-0 text-muted-foreground text-sm">
                      <span className="hidden sm:inline">
                        Have an account?
                      </span>
                      <Button className="font-medium h-auto hover:text-primary hover:underline p-0 text-sm underline-offset-4" type="button" tabIndex="0">
                        Sign in
                      </Button>
                    </span>
                  </div>
                  <FieldSet className="gap-3">
                    <FieldLegend className="sr-only" variant="legend">
                      Continue with provider
                    </FieldLegend>
                    <div className="gap-2 grid sm:grid-cols-3">
                      <Button className="w-full" type="button" tabIndex="0">
                        <svg aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                        </svg>
                        <span>
                          Apple
                        </span>
                      </Button>
                      <Button className="w-full" type="button" tabIndex="0">
                        <svg aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
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
                        <span>
                          Google
                        </span>
                      </Button>
                      <Button className="w-full" type="button" tabIndex="0">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 1200 1227">
                          <path fill="#000" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                        </svg>
                        <span>
                          X
                        </span>
                      </Button>
                    </div>
                  </FieldSet>
                  <div className="flex gap-3 items-center">
                    <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <span className="font-medium text-[0.6875rem] text-muted-foreground tracking-[0.08em] uppercase">
                      Or continue with email
                    </span>
                    <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </div>
                  <FieldSet>
                    <FieldLegend className="sr-only" variant="legend">
                      Contact information
                    </FieldLegend>
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field className="gap-2" role="group" data-orientation="vertical" invalid="false">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-7-email">
                          Email
                        </FieldLabel>
                        <Input id="checkout-7-email" autoComplete="email" aria-invalid="false" placeholder="you@example.com" type="email" value="morgan.lee@example.com"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-7-phone">
                          Phone
                          <span className="font-normal text-muted-foreground">
                            (optional)
                          </span>
                        </FieldLabel>
                        <Input id="checkout-7-phone" autoComplete="tel" placeholder="(555) 555-5555" type="tel" value="(415) 555-0148"></Input>
                      </Field>
                    </FieldGroup>
                    <Field className="gap-3 mt-4" role="group" data-orientation="horizontal">
                      <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2_" aria-checked="true" aria-labelledby="checkout-7-subscribe-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="checkout-7-subscribe" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-7-subscribe" id="checkout-7-subscribe-label">
                        Email me with order updates and offers
                      </FieldLabel>
                    </Field>
                  </FieldSet>
                </section>
              </StepperContent>
            </StepperPanel>
            <Separator className="mt-8" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="gap-1.5 inline-flex items-center text-muted-foreground text-xs">
                <svg className="lucide lucide-lock-keyhole size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockKeyholeIcon" tabler="IconLock" hugeicons="LockKeyIcon" phosphor="LockKeyIcon" remixicon="RiLockLine" aria-hidden="true">
                  <circle cx="12" cy="16" r="1"></circle>
                  <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                  <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                </svg>
                Secure encrypted checkout
              </span>
              <div className="flex gap-2 items-center sm:gap-3">
                <Button type="submit" tabIndex="0">
                  Continue
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <aside className="border-border border-t flex flex-col gap-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:sticky lg:top-6 min-w-0 pt-8" aria-label="Order summary">
            <div className="flex flex-col gap-0.5 min-w-0">
              <h2 className="font-semibold text-base" id="checkout-7-summary-title">
                Order summary
              </h2>
            </div>
            <ItemGroup className="gap-4" role="list">
              <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                <ItemMedia variant="image">
                  <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                    <a className="block group/product relative size-full" href="#wireless-headphones" aria-label="View Wireless Headphones">
                      <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Charcoal wireless over-ear headphones on a neutral surface" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=320&h=320&q=80" />
                    </a>
                    <span className="-translate-y-1/3 absolute bg-foreground font-medium h-4 inline-flex items-center justify-center leading-none min-w-4 pointer-events-none px-1 right-0 rounded-full text-[0.625rem] text-background top-0 translate-x-1/3">
                      1
                    </span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                    <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#wireless-headphones">
                      Wireless Headphones
                    </a>
                  </ItemTitle>
                  <ItemDescription className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-xs">
                    <span className="shrink-0 truncate">
                      Charcoal
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.6rem] text-destructive-foreground transition-shadow">
                      Sale
                    </Badge>
                  </ItemDescription>
                </ItemContent>
                <span className="font-medium shrink-0 tabular-nums text-right text-sm">
                  $199.00
                  <span className="block font-normal line-through text-muted-foreground text-xs">
                    $249.00
                  </span>
                </span>
              </Item>
              <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                <ItemMedia variant="image">
                  <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                    <a className="block group/product relative size-full" href="#classic-cotton-tee" aria-label="View Classic Cotton Tee">
                      <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Folded white cotton t-shirt on a clean background" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=320&h=320&q=80" />
                    </a>
                    <span className="-translate-y-1/3 absolute bg-foreground font-medium h-4 inline-flex items-center justify-center leading-none min-w-4 pointer-events-none px-1 right-0 rounded-full text-[0.625rem] text-background top-0 translate-x-1/3">
                      2
                    </span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                    <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#classic-cotton-tee">
                      Classic Cotton Tee
                    </a>
                  </ItemTitle>
                  <ItemDescription className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-xs">
                    <span className="shrink-0 truncate">
                      White · Size M
                    </span>
                  </ItemDescription>
                </ItemContent>
                <span className="font-medium shrink-0 tabular-nums text-right text-sm">
                  $56.00
                </span>
              </Item>
              <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                <ItemMedia variant="image">
                  <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                    <a className="block group/product relative size-full" href="#leather-bifold-wallet" aria-label="View Leather Bifold Wallet">
                      <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Tan leather bifold wallet product view" src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=320&h=320&q=80" />
                    </a>
                    <span className="-translate-y-1/3 absolute bg-foreground font-medium h-4 inline-flex items-center justify-center leading-none min-w-4 pointer-events-none px-1 right-0 rounded-full text-[0.625rem] text-background top-0 translate-x-1/3">
                      1
                    </span>
                  </Item>
                </ItemMedia>
                <ItemContent className="gap-0.5 min-w-0">
                  <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                    <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#leather-bifold-wallet">
                      Leather Bifold Wallet
                    </a>
                  </ItemTitle>
                  <ItemDescription className="flex flex-wrap gap-x-1.5 gap-y-1 items-center min-w-0 text-xs">
                    <span className="shrink-0 truncate">
                      Tan
                    </span>
                  </ItemDescription>
                </ItemContent>
                <span className="font-medium shrink-0 tabular-nums text-right text-sm">
                  $78.00
                </span>
              </Item>
            </ItemGroup>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Field className="gap-2" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-7-promo">
                Promo code
              </FieldLabel>
              <div className="flex gap-2">
                <Input id="checkout-7-promo" placeholder="Enter code" aria-invalid="false" value="SAVE10"></Input>
                <Button type="button" tabIndex="0">
                  Apply
                </Button>
              </div>
              <p className="text-success text-xs">
                SAVE10 applied for $10.00 off.
              </p>
            </Field>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Subtotal
                </span>
                <span className="tabular-nums">
                  $333.00
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Shipping
                </span>
                <span className="tabular-nums">
                  $12.00
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Tax
                </span>
                <span className="tabular-nums">
                  $29.31
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-success">
                  Discount
                </span>
                <span className="font-semibold tabular-nums text-success">
                  −$10.00
                </span>
              </div>
            </div>
            <Separator className="border-dashed" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex gap-3 items-baseline justify-between">
              <span className="font-semibold text-base">
                Total
              </span>
              <span className="font-semibold tabular-nums text-xl">
                $364.31
              </span>
            </div>
          </aside>
        </form>
      </Stepper>
    </main>
  )
}
