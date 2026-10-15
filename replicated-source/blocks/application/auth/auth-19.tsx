import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background flex flex-col min-h-svh text-foreground w-full">
      <header className="flex gap-4 items-center justify-between lg:px-10 px-5 py-5 sm:px-8 sm:py-6">
        <div className="gap-2 inline-flex items-center">
          <Item className="bg-primary p-2 size-8 text-primary-foreground" variant="default" size="default" aria-hidden="true">
            <ItemMedia className="size-auto" variant="icon">
              <svg className="size-[1.05rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
              </svg>
            </ItemMedia>
          </Item>
          <span className="font-medium text-[0.9375rem]">
            NeUI
          </span>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <span className="hidden sm:inline text-muted-foreground">
            Need workspace access?
          </span>
          <Button className="font-medium h-auto p-0" href="#" role="button" tabIndex="0">
            Request invite
          </Button>
        </div>
      </header>
      <section className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-6 items-center w-full">
          <Card className="max-w-[26rem] overflow-hidden p-0 w-full" size="default">
            <CardHeader className="pb-5 pt-8 px-7 sm:pb-6 sm:pt-9 sm:px-9">
              <div className="space-y-1">
                <CardTitle className="font-semibold text-2xl text-balance tracking-tight">
                  Welcome back
                </CardTitle>
                <CardDescription className="text-pretty">
                  Use your approved workspace email to receive a secure sign-in link.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 pb-7 px-7 sm:pb-8 sm:px-9">
              <div className="gap-3 grid">
                <Button className="[&_svg:not([class*='size-'])]:size-4 px-4 w-full" type="button" tabIndex="0">
                  <svg className="shrink-0 size-4" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
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
                    Continue with Google
                  </span>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-4 px-4 w-full" type="button" tabIndex="0">
                  <span className="dark:hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="dark:block hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                    </svg>
                  </span>
                  <span>
                    Continue with GitHub
                  </span>
                </Button>
              </div>
              <div className="flex gap-3 items-center">
                <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <span className="text-muted-foreground text-xs">
                  or
                </span>
                <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <form className="flex flex-col gap-5">
                <FieldGroup>
                  <Field className="gap-2" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="auth-19-email">
                      Work email
                    </FieldLabel>
                    <InputGroup role="group">
                      <InputGroupAddon role="group" data-align="inline-start">
                        <svg className="lucide lucide-mail size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="auth-19-email" autoComplete="email" placeholder="name@company.com" required type="email" />
                    </InputGroup>
                  </Field>
                </FieldGroup>
                <Button className="w-full" type="submit" tabIndex="0">
                  Continue with email
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </form>
            </CardContent>
          </Card>
          <footer className="flex flex-col gap-2 items-center leading-5 max-w-[26rem] text-center text-muted-foreground text-pretty text-xs">
            <p>
              By continuing, you agree to NeUI's
              <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                Terms
              </a>
              and
              <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}
