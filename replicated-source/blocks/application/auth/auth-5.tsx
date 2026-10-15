import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background isolate min-h-svh overflow-hidden relative w-full">
      <div className="auth18-wave" aria-hidden="true">
        <div className="auth18-blob auth18-blob-1"></div>
        <div className="auth18-blob auth18-blob-2"></div>
        <div className="auth18-blob auth18-blob-3"></div>
        <div className="auth18-blob auth18-blob-4"></div>
        <div className="auth18-grain"></div>
        <style dangerouslySetInnerHTML={{ __html: "\n  .auth18-wave { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }\n  .auth18-blob { position: absolute; border-radius: 9999px; filter: blur(110px); will-change: transform; }\n  .auth18-blob-1 {\n    top: -18%; right: -12%;\n    width: 64vw; height: 64vw; max-width: 780px; max-height: 780px;\n    background: radial-gradient(circle at 30% 30%, rgba(255, 138, 61, 0.78), rgba(255, 138, 61, 0) 70%);\n    animation: auth18-drift-1 22s ease-in-out infinite;\n  }\n  .auth18-blob-2 {\n    top: 6%; right: 18%;\n    width: 52vw; height: 52vw; max-width: 640px; max-height: 640px;\n    background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.6), rgba(236, 72, 153, 0) 70%);\n    animation: auth18-drift-2 30s ease-in-out infinite;\n  }\n  .auth18-blob-3 {\n    top: 32%; right: -6%;\n    width: 48vw; height: 48vw; max-width: 600px; max-height: 600px;\n    background: radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.55), rgba(139, 92, 246, 0) 70%);\n    animation: auth18-drift-3 26s ease-in-out infinite;\n  }\n  .auth18-blob-4 {\n    top: 58%; right: 12%;\n    width: 44vw; height: 44vw; max-width: 560px; max-height: 560px;\n    background: radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.45), rgba(59, 130, 246, 0) 70%);\n    animation: auth18-drift-4 34s ease-in-out infinite;\n  }\n  .auth18-grain {\n    position: absolute; inset: 0; opacity: 0.35; mix-blend-mode: overlay;\n    background-image: url(\"data:image/svg+xml;utf8,\u003csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>\u003cfilter id='n'>\u003cfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>\u003cfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/>\u003c/filter>\u003crect width='100%' height='100%' filter='url(%23n)'/>\u003c/svg>\");\n  }\n  .dark .auth18-blob-1 { background: radial-gradient(circle at 30% 30%, rgba(255, 138, 61, 0.55), rgba(255, 138, 61, 0) 70%); }\n  .dark .auth18-blob-2 { background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.45), rgba(236, 72, 153, 0) 70%); }\n  .dark .auth18-blob-3 { background: radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.45), rgba(139, 92, 246, 0) 70%); }\n  .dark .auth18-blob-4 { background: radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.38), rgba(59, 130, 246, 0) 70%); }\n  .dark .auth18-grain { opacity: 0.18; }\n  @keyframes auth18-drift-1 {\n    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }\n    50% { transform: translate3d(-5%, 7%, 0) scale(1.08); }\n  }\n  @keyframes auth18-drift-2 {\n    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }\n    50% { transform: translate3d(7%, -5%, 0) scale(1.12); }\n  }\n  @keyframes auth18-drift-3 {\n    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }\n    50% { transform: translate3d(-7%, -7%, 0) scale(1.1); }\n  }\n  @keyframes auth18-drift-4 {\n    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }\n    50% { transform: translate3d(9%, 5%, 0) scale(1.14); }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .auth18-blob { animation: none !important; }\n  }\n" }} />
      </div>
      <div className="flex flex-col lg:px-14 lg:py-12 min-h-svh px-6 py-7 relative sm:px-12 sm:py-10">
        <header className="flex items-center justify-between">
          <div className="flex gap-2.5 items-center">
            <Item className="bg-primary p-0 size-9 text-primary-foreground" variant="default" size="default" aria-hidden="true">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-[18px]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                </svg>
              </ItemMedia>
            </Item>
            <span className="font-semibold text-base tracking-tight">
              {"NeUI"}
            </span>
          </div>
          <p className="font-medium text-foreground/75 text-sm">
            {"Already on NeUI?"}
            <a className="font-semibold hover:text-primary hover:underline text-foreground transition-colors underline-offset-4" href="#">
              {"Sign in"}
            </a>
          </p>
        </header>
        <main className="flex flex-1 items-center lg:py-24 max-w-6xl mx-auto py-16 sm:py-20 w-full">
          <div className="gap-14 grid grid-cols-1 items-center lg:gap-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] sm:gap-16 w-full">
            <div className="flex flex-col gap-7 max-w-xl sm:gap-8">
              <div className="backdrop-blur-sm bg-background/80 border border-border/60 font-medium gap-2 inline-flex items-center px-3 py-1 rounded-full text-foreground/70 text-sm tracking-tight w-fit">
                <span className="bg-primary rounded-full size-1.5" aria-hidden="true"></span>
                <span>
                  {"Global product teams ship on NeUI"}
                </span>
              </div>
              <h1 className="font-semibold leading-[1.02] lg:text-[56px] sm:text-5xl text-4xl text-balance text-foreground tracking-[-0.02em]">
                {"The UI layer to grow your"}
                <span className="bg-clip-text bg-gradient-to-r from-orange-500 text-transparent to-violet-500 via-pink-500">
                  {"product"}
                </span>
                {"."}
              </h1>
              <p className="leading-relaxed max-w-xl sm:text-lg text-base text-muted-foreground text-pretty">
                {"A premium block library built on shadcn. Auth, billing, dashboards, and settings. Production-ready the day you clone it."}
              </p>
            </div>
            <Frame className="w-full">
              <FramePanel className="p-6 sm:space-y-8 space-y-7">
                <div className="space-y-2">
                  <div className="font-semibold text-xl tracking-tight">
                    {"Start your 14-day trial"}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {"No credit card. No sales call. Just ship."}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button className="w-full" type="button" tabIndex="0">
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
                      {"Continue with Google"}
                    </span>
                  </Button>
                  <Button className="w-full" type="button" tabIndex="0">
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
                      {"Continue with GitHub"}
                    </span>
                  </Button>
                </div>
                <div className="flex gap-3 items-center">
                  <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <span className="text-muted-foreground text-xs tracking-wide uppercase">
                    {"or"}
                  </span>
                  <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <form className="flex flex-col gap-6">
                  <FieldGroup className="gap-5">
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="auth-5-email">
                        {"Work email"}
                      </FieldLabel>
                      <Input id="auth-5-email" autoComplete="email" placeholder="you@company.com" required type="email"></Input>
                    </Field>
                    <Field className="gap-2" role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="auth-5-password">
                        {"Password"}
                      </FieldLabel>
                      <InputGroup role="group">
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="auth-5-password" autoComplete="new-password" placeholder="8+ characters" required type="password" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex hover:text-foreground shadow-none text-muted-foreground" type="button" tabIndex="0" size="icon-xs" aria-label="Show password" aria-pressed="false">
                            <svg className="lucide lucide-eye size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                  </FieldGroup>
                  <Button className="mt-1.5 w-full" type="submit" tabIndex="0">
                    {"Start free trial"}
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                  <p className="leading-5 text-center text-muted-foreground text-pretty text-xs">
                    {"By continuing you agree to NeUI's"}
                    <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                      {"Terms"}
                    </a>
                    {"and"}
                    <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                      {"Privacy Policy"}
                    </a>
                    {"."}
                  </p>
                </form>
              </FramePanel>
            </Frame>
          </div>
        </main>
        <footer className="max-w-6xl mx-auto pb-6 pt-10 sm:pt-14 w-full">
          <div className="flex flex-col gap-4 items-center">
            <p className="font-medium text-[11px] text-muted-foreground/90 tracking-[0.22em] uppercase">
              {"Teams shipping with NeUI"}
            </p>
            <ul className="gap-x-2 gap-y-2.5 grid grid-cols-2 items-center lg:gap-x-2 lg:gap-y-0 lg:grid-cols-6 max-w-2xl opacity-90 sm:gap-x-2.5 sm:gap-y-3 sm:grid-cols-3 w-full" aria-label="Customer logos">
              <li className="flex h-9 items-center justify-center" aria-label="Stripe">
                <svg className="h-[18px] w-auto" aria-hidden="true" viewBox="0 0 512 214">
                  <path fill="#635bff" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.85 0-54.33 28.73-54.33 64.854 0 42.808 24.179 64.426 58.88 64.426 16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756 8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968 12.942 0 21.902 14.506 21.902 33.137 0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386-34.702 7.395-.142 113.92c0 21.05 15.787 36.551 36.836 36.551 11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68 10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92 0 6.541-5.688 8.675-13.653 8.675-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106 29.582 0 49.92-14.648 49.92-40.106-.142-42.382-54.329-34.845-54.329-50.774"></path>
                </svg>
              </li>
              <li className="flex h-9 items-center justify-center" aria-label="OpenAI">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="h-[18px] w-auto" aria-hidden="true" viewBox="0 0 1180 320">
                    <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8z m129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z M614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84z m-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z M747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52z m-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z M823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8z M1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32z m16.8 34.08 27.36 72h-54.24z M1163.69 68.18h-30.72V240.5h30.72z M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51z M176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97z M47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95z M31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89z m221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06z m26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1z m-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79z M125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="h-[18px] w-auto" aria-hidden="true" fill="none" viewBox="0 0 1180 320">
                    <g fill="#fff" clipPath="url(#openaiwordmarkdark-a)">
                      <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8 46.56 0 80.16-36.48 80.16-88.8s-33.6-88.8-80.16-88.8c-46.56 0-80.16 36.48-80.16 88.8Z m129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68Z M614.27 242.64c35.28 0 55.44-29.76 55.44-65.52 0-35.76-20.16-65.52-55.44-65.52-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84Z m-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48v-7.44Z M747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16-36.48 0-60 28.56-60 65.52 0 38.88 25.2 65.52 61.2 65.52Z m-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92Z M823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8v126Z M1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32h-34.8Z m16.8 34.08 27.36 72h-54.24l26.88-72Z M1163.69 68.18h-30.72V240.5h30.72V68.18Z M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51l-.01.02Z M176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97Z M47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95h-.01Z M31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89l.01-.01Z m221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06h-.01Z m26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1h.02Z m-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79v.02Z M125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20v-40Z"></path>
                    </g>
                    <defs>
                      <clippath id="openaiwordmarkdark-a">
                        <path fill="#fff" d="M0 0h1180v320H0z"></path>
                      </clippath>
                    </defs>
                  </svg>
                </span>
              </li>
              <li className="flex h-9 items-center justify-center" aria-label="Anthropic">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="h-[13px] w-auto" aria-hidden="true" fillRule="evenodd" viewBox="0 0 182 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="h-[13px] w-auto" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 182 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z"></path>
                  </svg>
                </span>
              </li>
              <li className="flex h-9 items-center justify-center" aria-label="Slack">
                <svg className="h-[17px] text-foreground w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 2500 632.6">
                  <path fillRule="evenodd" d="m799.8 498.1 31.2-72.5c33.7 25.2 78.6 38.3 122.9 38.3 32.7 0 53.4-12.6 53.4-31.7-.5-53.4-195.9-11.6-197.4-145.5-.5-68 59.9-120.4 145.5-120.4 50.9 0 101.7 12.6 138 41.3l-29.2 74c-33.2-21.2-74.5-36.3-113.8-36.3-26.7 0-44.3 12.6-44.3 28.7.5 52.4 197.4 23.7 199.4 151.6 0 69.5-58.9 118.4-143.5 118.4-62-.1-118.9-14.7-162.2-45.9m1198.1-98.7c-15.6 27.2-44.8 45.8-78.6 45.8-49.9 0-90.1-40.3-90.1-90.1s40.3-90.1 90.1-90.1c33.7 0 63 18.6 78.6 45.8L2084 263c-32.2-57.4-94.2-96.7-164.7-96.7-104.3 0-188.9 84.6-188.9 188.9s84.6 188.9 188.9 188.9c71 0 132.5-38.8 164.7-96.7zM1148.8 9.6h107.8v527.3h-107.8zm977.5 0v527.3h107.8V378.7L2362 536.9h138L2337.3 349l150.6-175.3h-132L2234 319.2V9.6z" clipRule="evenodd"></path>
                  <path d="M1576.9 400.4c-15.6 25.7-47.8 44.8-84.1 44.8-49.9 0-90.1-40.3-90.1-90.1s40.3-90.1 90.1-90.1c36.3 0 68.5 20.1 84.1 46.3zm0-226.6v42.8c-17.6-29.7-61.4-50.4-107.3-50.4-94.7 0-169.2 83.6-169.2 188.4S1374.9 544 1469.6 544c45.8 0 89.6-20.6 107.3-50.4v42.8h107.8V173.8z"></path>
                  <g fillRule="evenodd" clipRule="evenodd">
                    <path fill="#e01e5a" d="M133.5 399.9c0 36.8-29.7 66.5-66.5 66.5S.5 436.6.5 399.9s29.7-66.5 66.5-66.5h66.5zm33.2 0c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5v166.2c0 36.8-29.7 66.5-66.5 66.5s-66.5-29.7-66.5-66.5z"></path>
                    <path fill="#36c5f0" d="M233.2 133c-36.8 0-66.5-29.7-66.5-66.5S196.4 0 233.2 0s66.5 29.7 66.5 66.5V133zm0 33.7c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5H66.5C29.7 299.7 0 269.9 0 233.2s29.7-66.5 66.5-66.5z"></path>
                    <path fill="#2eb67d" d="M499.6 233.2c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5-29.7 66.5-66.5 66.5h-66.5zm-33.2 0c0 36.8-29.7 66.5-66.5 66.5s-66.5-29.7-66.5-66.5V66.5c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5z"></path>
                    <path fill="#ecb22e" d="M399.9 499.6c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5-66.5-29.7-66.5-66.5v-66.5zm0-33.2c-36.8 0-66.5-29.7-66.5-66.5s29.7-66.5 66.5-66.5h166.7c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5z"></path>
                  </g>
                </svg>
              </li>
              <li className="flex h-9 items-center justify-center" aria-label="Mintlify">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="h-[16px] w-auto" aria-hidden="true" viewBox="0 0 104 24" fill="none">
                    <path d="M18.4725 9.60528V3.91396C18.4725 3.30323 17.977 2.81641 17.3754 2.81641H11.6867C10.7931 2.81641 9.90842 2.99342 9.08564 3.32977C8.26285 3.67497 7.51085 4.17064 6.88271 4.80793L6.83847 4.85219C6.00684 5.69305 5.41408 6.73749 5.11328 7.88815C5.65296 7.74653 6.2103 7.67572 6.76767 7.66687C8.25399 7.64916 9.71378 8.12713 10.8993 9.02111C11.9698 9.81771 12.7837 10.9153 13.2261 12.181C13.6861 13.4644 13.7392 14.8629 13.3942 16.1817C14.5354 15.8808 15.5883 15.2878 16.4288 14.4558L16.473 14.4115C17.1011 13.7831 17.6054 13.0307 17.9504 12.2075C18.2955 11.3844 18.4636 10.4993 18.4636 9.60528H18.4725Z" fill="#18E299"></path>
                    <path d="M4.9434 9.50941C4.95221 7.76347 5.64849 6.08807 6.87361 4.83594L2.14058 9.57113C2.12296 9.58876 2.10532 9.59758 2.08769 9.61522C0.933084 10.7615 0.23681 12.2959 0.122231 13.9183C0.0164654 15.435 0.413078 16.934 1.2592 18.1862C1.33991 18.3056 1.5589 18.3449 1.68229 18.2303L4.58202 15.338C5.48985 14.4298 5.7719 13.0806 5.34002 11.8726C5.06679 11.1231 4.93459 10.3207 4.9434 9.50941Z" fill="#0C8C5E"></path>
                    <path d="M16.4445 14.4121C15.5367 15.3027 14.3997 15.92 13.1658 16.1933C11.923 16.4667 10.6362 16.3873 9.43757 15.9641C9.43757 15.9641 9.42874 15.9641 9.41992 15.9641C8.21243 15.532 6.86394 15.8141 5.95612 16.7136L3.05634 19.6058C2.93295 19.7293 2.95057 19.9321 3.10041 20.0291C4.35197 20.8668 5.85035 21.2724 7.36632 21.1666C8.98806 21.052 10.5128 20.3553 11.6674 19.2002L11.7115 19.1561L16.4445 14.4209V14.4121Z" fill="#0C8C5E"></path>
                    <path d="M96.2355 23.5H92.6842L95.1868 17.8513L90.1816 6.60156H93.7568L96.6734 13.6537C96.7753 13.9002 97.1246 13.8997 97.2259 13.653L100.12 6.60156H103.719L96.2355 23.5Z" fill="#08090A"></path>
                    <path d="M85.4483 18.5186V9.46164H83.041V6.60154H85.4483V5.05232C85.4483 3.63816 85.8773 2.5259 86.7353 1.71554C87.5933 0.90518 88.6818 0.5 90.0006 0.5C90.8109 0.5 91.5021 0.587392 92.0742 0.762175V3.64611C91.6928 3.5031 91.2479 3.4316 90.7394 3.4316C90.0244 3.4316 89.508 3.59049 89.1902 3.90828C88.8724 4.21018 88.7135 4.72659 88.7135 5.4575V6.60154H92.0742V9.46164H88.7135V18.5186H85.4483Z" fill="#08090A"></path>
                    <path d="M80.1204 4.64714C79.5643 4.64714 79.0797 4.44852 78.6666 4.05129C78.2534 3.63816 78.0469 3.14559 78.0469 2.57357C78.0469 2.00155 78.2534 1.51692 78.6666 1.11969C79.0797 0.706563 79.5643 0.5 80.1204 0.5C80.7084 0.5 81.2009 0.706563 81.5982 1.11969C82.0113 1.51692 82.2178 2.00155 82.2178 2.57357C82.2178 3.14559 82.0113 3.63816 81.5982 4.05129C81.2009 4.44852 80.7084 4.64714 80.1204 4.64714ZM78.4997 18.5186V6.60154H81.765V18.5186H78.4997Z" fill="#08090A"></path>
                    <path d="M72.8125 18.5182V0.642578H76.0778V18.5182H72.8125Z" fill="#08090A"></path>
                    <path d="M69.1256 18.6621C67.7909 18.6621 66.6945 18.2966 65.8365 17.5657C64.9943 16.8189 64.5733 15.7464 64.5733 14.3481V9.46211H62.166V6.60201H64.5733V3.28906H67.8385V6.60201H71.1992V9.46211H67.8385V13.7046C67.8385 14.4355 67.9974 14.9598 68.3152 15.2776C68.633 15.5795 69.1494 15.7305 69.8644 15.7305C70.3729 15.7305 70.8178 15.659 71.1992 15.516V18.3999C70.6271 18.5747 69.9359 18.6621 69.1256 18.6621Z" fill="#08090A"></path>
                    <path d="M49.9434 18.5191V6.60202H53.2086V7.47307C53.2086 7.62037 53.4091 7.6855 53.5066 7.57513C54.2346 6.75161 55.2713 6.33984 56.6169 6.33984C58.047 6.33984 59.1672 6.81653 59.9775 7.76989C60.8038 8.70737 61.2169 9.96263 61.2169 11.5357V18.5191H57.9516V12.0839C57.9516 11.21 57.7689 10.5347 57.4034 10.058C57.038 9.5654 56.5216 9.31911 55.8542 9.31911C55.0598 9.31911 54.4162 9.60512 53.9237 10.1771C53.447 10.7492 53.2086 11.5913 53.2086 12.7036V18.5191H49.9434Z" fill="#08090A"></path>
                    <path d="M45.8783 4.64714C45.3221 4.64714 44.8375 4.44852 44.4244 4.05129C44.0113 3.63816 43.8047 3.14559 43.8047 2.57357C43.8047 2.00155 44.0113 1.51692 44.4244 1.11969C44.8375 0.706563 45.3221 0.5 45.8783 0.5C46.4662 0.5 46.9587 0.706563 47.356 1.11969C47.7691 1.51692 47.9757 2.00155 47.9757 2.57357C47.9757 3.14559 47.7691 3.63816 47.356 4.05129C46.9587 4.44852 46.4662 4.64714 45.8783 4.64714ZM44.2575 18.5186V6.60154H47.5228V18.5186H44.2575Z" fill="#08090A"></path>
                    <path d="M38.7147 18.5191V12.1554C38.7147 10.2645 38.095 9.31911 36.8557 9.31911C36.1406 9.31911 35.5686 9.58923 35.1396 10.1295C34.7265 10.6697 34.504 11.4721 34.4722 12.5367V18.5191H31.207V12.1554C31.207 10.2645 30.5873 9.31911 29.3479 9.31911C28.617 9.31911 28.037 9.60512 27.608 10.1771C27.179 10.7492 26.9645 11.5913 26.9645 12.7036V18.5191H23.6992V6.60202H26.9645V7.48165C26.9645 7.62818 27.1615 7.69271 27.2578 7.58222C27.9791 6.75397 28.938 6.33984 30.1344 6.33984C31.7067 6.33984 32.8909 6.98895 33.687 8.28717C33.7498 8.38958 33.9044 8.38799 33.9668 8.28535C34.311 7.71964 34.7893 7.26975 35.4018 6.9357C36.1009 6.53846 36.808 6.33984 37.523 6.33984C38.9372 6.33984 40.0335 6.80858 40.8121 7.74606C41.5907 8.68353 41.98 9.97058 41.98 11.6072V18.5191H38.7147Z" fill="#08090A"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="h-[16px] w-auto" aria-hidden="true" viewBox="0 0 104 24" fill="none">
                    <path d="M18.4725 9.60528V3.91396C18.4725 3.30323 17.977 2.81641 17.3754 2.81641H11.6867C10.7931 2.81641 9.90842 2.99342 9.08564 3.32977C8.26285 3.67497 7.51085 4.17064 6.88271 4.80793L6.83847 4.85219C6.00684 5.69305 5.41408 6.73749 5.11328 7.88815C5.65296 7.74653 6.2103 7.67572 6.76767 7.66687C8.25399 7.64916 9.71378 8.12713 10.8993 9.02111C11.9698 9.81771 12.7837 10.9153 13.2261 12.181C13.6861 13.4644 13.7392 14.8629 13.3942 16.1817C14.5354 15.8808 15.5883 15.2878 16.4288 14.4558L16.473 14.4115C17.1011 13.7831 17.6054 13.0307 17.9504 12.2075C18.2955 11.3844 18.4636 10.4993 18.4636 9.60528H18.4725Z" fill="#18E299"></path>
                    <path d="M4.9434 9.50941C4.95221 7.76347 5.64849 6.08807 6.87361 4.83594L2.14058 9.57113C2.12296 9.58876 2.10532 9.59758 2.08769 9.61522C0.933084 10.7615 0.23681 12.2959 0.122231 13.9183C0.0164654 15.435 0.413078 16.934 1.2592 18.1862C1.33991 18.3056 1.5589 18.3449 1.68229 18.2303L4.58202 15.338C5.48985 14.4298 5.7719 13.0806 5.34002 11.8726C5.06679 11.1231 4.93459 10.3207 4.9434 9.50941Z" fill="#0C8C5E"></path>
                    <path d="M16.4445 14.4121C15.5367 15.3027 14.3997 15.92 13.1658 16.1933C11.923 16.4667 10.6362 16.3873 9.43757 15.9641C9.43757 15.9641 9.42874 15.9641 9.41992 15.9641C8.21243 15.532 6.86394 15.8141 5.95612 16.7136L3.05634 19.6058C2.93295 19.7293 2.95057 19.9321 3.10041 20.0291C4.35197 20.8668 5.85035 21.2724 7.36632 21.1666C8.98806 21.052 10.5128 20.3553 11.6674 19.2002L11.7115 19.1561L16.4445 14.4209V14.4121Z" fill="#0C8C5E"></path>
                    <path d="M96.2355 23.5H92.6842L95.1868 17.8513L90.1816 6.60156H93.7568L96.6734 13.6537C96.7753 13.9002 97.1246 13.8997 97.2259 13.653L100.12 6.60156H103.719L96.2355 23.5Z" fill="#ffff"></path>
                    <path d="M85.4483 18.5186V9.46164H83.041V6.60154H85.4483V5.05232C85.4483 3.63816 85.8773 2.5259 86.7353 1.71554C87.5933 0.90518 88.6818 0.5 90.0006 0.5C90.8109 0.5 91.5021 0.587392 92.0742 0.762175V3.64611C91.6928 3.5031 91.2479 3.4316 90.7394 3.4316C90.0244 3.4316 89.508 3.59049 89.1902 3.90828C88.8724 4.21018 88.7135 4.72659 88.7135 5.4575V6.60154H92.0742V9.46164H88.7135V18.5186H85.4483Z" fill="#ffff"></path>
                    <path d="M80.1204 4.64714C79.5643 4.64714 79.0797 4.44852 78.6666 4.05129C78.2534 3.63816 78.0469 3.14559 78.0469 2.57357C78.0469 2.00155 78.2534 1.51692 78.6666 1.11969C79.0797 0.706563 79.5643 0.5 80.1204 0.5C80.7084 0.5 81.2009 0.706563 81.5982 1.11969C82.0113 1.51692 82.2178 2.00155 82.2178 2.57357C82.2178 3.14559 82.0113 3.63816 81.5982 4.05129C81.2009 4.44852 80.7084 4.64714 80.1204 4.64714ZM78.4997 18.5186V6.60154H81.765V18.5186H78.4997Z" fill="#ffff"></path>
                    <path d="M72.8125 18.5182V0.642578H76.0778V18.5182H72.8125Z" fill="#ffff"></path>
                    <path d="M69.1256 18.6621C67.7909 18.6621 66.6945 18.2966 65.8365 17.5657C64.9943 16.8189 64.5733 15.7464 64.5733 14.3481V9.46211H62.166V6.60201H64.5733V3.28906H67.8385V6.60201H71.1992V9.46211H67.8385V13.7046C67.8385 14.4355 67.9974 14.9598 68.3152 15.2776C68.633 15.5795 69.1494 15.7305 69.8644 15.7305C70.3729 15.7305 70.8178 15.659 71.1992 15.516V18.3999C70.6271 18.5747 69.9359 18.6621 69.1256 18.6621Z" fill="#ffff"></path>
                    <path d="M49.9434 18.5191V6.60202H53.2086V7.47307C53.2086 7.62037 53.4091 7.6855 53.5066 7.57513C54.2346 6.75161 55.2713 6.33984 56.6169 6.33984C58.047 6.33984 59.1672 6.81653 59.9775 7.76989C60.8038 8.70737 61.2169 9.96263 61.2169 11.5357V18.5191H57.9516V12.0839C57.9516 11.21 57.7689 10.5347 57.4034 10.058C57.038 9.5654 56.5216 9.31911 55.8542 9.31911C55.0598 9.31911 54.4162 9.60512 53.9237 10.1771C53.447 10.7492 53.2086 11.5913 53.2086 12.7036V18.5191H49.9434Z" fill="#ffff"></path>
                    <path d="M45.8783 4.64714C45.3221 4.64714 44.8375 4.44852 44.4244 4.05129C44.0113 3.63816 43.8047 3.14559 43.8047 2.57357C43.8047 2.00155 44.0113 1.51692 44.4244 1.11969C44.8375 0.706563 45.3221 0.5 45.8783 0.5C46.4662 0.5 46.9587 0.706563 47.356 1.11969C47.7691 1.51692 47.9757 2.00155 47.9757 2.57357C47.9757 3.14559 47.7691 3.63816 47.356 4.05129C46.9587 4.44852 46.4662 4.64714 45.8783 4.64714ZM44.2575 18.5186V6.60154H47.5228V18.5186H44.2575Z" fill="#ffff"></path>
                    <path d="M38.7147 18.5191V12.1554C38.7147 10.2645 38.095 9.31911 36.8557 9.31911C36.1406 9.31911 35.5686 9.58923 35.1396 10.1295C34.7265 10.6697 34.504 11.4721 34.4722 12.5367V18.5191H31.207V12.1554C31.207 10.2645 30.5873 9.31911 29.3479 9.31911C28.617 9.31911 28.037 9.60512 27.608 10.1771C27.179 10.7492 26.9645 11.5913 26.9645 12.7036V18.5191H23.6992V6.60202H26.9645V7.48165C26.9645 7.62818 27.1615 7.69271 27.2578 7.58222C27.9791 6.75397 28.938 6.33984 30.1344 6.33984C31.7067 6.33984 32.8909 6.98895 33.687 8.28717C33.7498 8.38958 33.9044 8.38799 33.9668 8.28535C34.311 7.71964 34.7893 7.26975 35.4018 6.9357C36.1009 6.53846 36.808 6.33984 37.523 6.33984C38.9372 6.33984 40.0335 6.80858 40.8121 7.74606C41.5907 8.68353 41.98 9.97058 41.98 11.6072V18.5191H38.7147Z" fill="#ffff"></path>
                  </svg>
                </span>
              </li>
              <li className="flex h-9 items-center justify-center" aria-label="Resend">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="h-[13px] w-auto" aria-hidden="true" viewBox="0 0 1978 420" fill="none">
                    <path d="M543.803 118.321C633.178 118.321 698.215 180.419 693.6 293.286H475.948C484.076 324.654 505.791 351.608 549.257 351.608C573.594 351.608 595.833 344.895 612.617 323.916H687.726L686.467 330.629C673.459 388.112 608.001 420 549.257 420C456.106 420 393.585 357.062 393.585 269.37C393.585 181.678 456.106 118.321 543.803 118.321ZM1173.62 118.321C1263.42 118.321 1328.04 180.419 1323.84 293.286H1106.13C1114.16 324.654 1135.72 351.608 1179.5 351.608C1203.84 351.608 1226.07 344.895 1242.44 323.916H1317.97L1316.71 330.629C1303.7 388.111 1238.24 420 1179.5 420C1086.35 420 1023.83 357.063 1023.83 269.37C1023.83 181.678 1086.35 118.321 1173.62 118.321ZM1978 411.609H1896.6L1900.79 370.91C1889.46 395.246 1852.96 419.162 1807.22 419.162C1731.69 419.162 1670.43 361.26 1670.43 269.791C1670.43 178.322 1730.85 120.42 1807.22 120.42C1848.76 120.42 1874.36 133.847 1897.02 156.924V0H1978V411.609ZM853.47 116.644C919.767 116.644 978.091 140.559 994.875 199.301L996.554 205.595H913.892C896.268 183.777 872.771 180.839 853.47 180.839C835.427 180.839 806.894 185.455 806.894 203.077C806.894 219.441 825.776 224.895 842.141 226.993L889.975 232.028C965.922 238.742 999.491 268.532 999.491 326.854C999.491 393.986 932.774 419.161 866.896 419.161C801.019 419.161 732.624 389.79 719.616 330.21L718.357 323.916H803.117C814.866 357.483 868.994 354.965 866.896 354.965C898.786 354.965 918.508 345.315 918.508 329.79C918.508 319.72 915.15 307.972 882.422 303.776L832.489 298.741C766.612 294.126 726.75 259.3 726.75 207.272C726.75 143.496 787.173 116.644 853.47 116.644ZM251.761 0C331.485 0 378.9 47.4126 378.9 110.35C378.9 173.287 331.485 220.7 251.761 220.7H211.479L411.629 411.609H270.224L117.908 266.854C106.999 256.784 101.963 245.036 101.963 234.966C101.963 220.7 112.034 208.113 131.335 202.658L209.801 181.679C239.592 173.707 260.153 150.63 260.153 120.42C260.153 83.4968 229.941 62.0977 192.597 62.0977H0V0H251.761ZM1520.63 118.74C1591.97 118.74 1641.9 170.768 1641.9 245.034V411.608H1560.5V258.88C1560.5 216.922 1538.26 191.747 1498.81 191.747C1459.37 191.747 1433.78 217.761 1433.78 258.88V411.608H1354.05V124.614H1435.04L1431.26 170.349C1443.01 147.272 1479.51 118.74 1520.63 118.74ZM1826.52 191.749C1777.43 191.749 1751.42 228.252 1751.42 269.791C1751.42 314.266 1780.79 348.252 1826.52 348.252C1870.58 348.252 1899.11 313.847 1899.11 269.791C1899.11 225.735 1871.42 191.749 1826.52 191.749ZM543.803 183.355C504.138 183.355 481.475 207.041 474.442 238.74H611.728C610.893 235.09 609.818 231.188 608.421 226.992C598.35 198.461 574.853 183.356 543.803 183.355ZM1173.62 183.355C1134.3 183.356 1111.7 207.041 1104.68 238.74H1241.97C1241.13 235.09 1240.06 231.188 1238.66 226.992C1228.59 198.461 1205.09 183.355 1173.62 183.355Z" fill="black"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="h-[13px] w-auto" aria-hidden="true" viewBox="0 0 1978 420" fill="none">
                    <path d="M543.803 118.321C633.178 118.321 698.215 180.419 693.6 293.286H475.948C484.076 324.654 505.791 351.608 549.257 351.608C573.594 351.608 595.833 344.895 612.617 323.916H687.726L686.467 330.629C673.459 388.112 608.001 420 549.257 420C456.106 420 393.585 357.062 393.585 269.37C393.585 181.678 456.106 118.321 543.803 118.321ZM1173.62 118.321C1263.42 118.321 1328.04 180.419 1323.84 293.286H1106.13C1114.16 324.654 1135.72 351.608 1179.5 351.608C1203.84 351.608 1226.07 344.895 1242.44 323.916H1317.97L1316.71 330.629C1303.7 388.111 1238.24 420 1179.5 420C1086.35 420 1023.83 357.063 1023.83 269.37C1023.83 181.678 1086.35 118.321 1173.62 118.321ZM1978 411.609H1896.6L1900.79 370.91C1889.46 395.246 1852.96 419.162 1807.22 419.162C1731.69 419.162 1670.43 361.26 1670.43 269.791C1670.43 178.322 1730.85 120.42 1807.22 120.42C1848.76 120.42 1874.36 133.847 1897.02 156.924V0H1978V411.609ZM853.47 116.644C919.767 116.644 978.091 140.559 994.875 199.301L996.554 205.595H913.892C896.268 183.777 872.771 180.839 853.47 180.839C835.427 180.839 806.894 185.455 806.894 203.077C806.894 219.441 825.776 224.895 842.141 226.993L889.975 232.028C965.922 238.742 999.491 268.532 999.491 326.854C999.491 393.986 932.774 419.161 866.896 419.161C801.019 419.161 732.624 389.79 719.616 330.21L718.357 323.916H803.117C814.866 357.483 868.994 354.965 866.896 354.965C898.786 354.965 918.508 345.315 918.508 329.79C918.508 319.72 915.15 307.972 882.422 303.776L832.489 298.741C766.612 294.126 726.75 259.3 726.75 207.272C726.75 143.496 787.173 116.644 853.47 116.644ZM251.761 0C331.485 0 378.9 47.4126 378.9 110.35C378.9 173.287 331.485 220.7 251.761 220.7H211.479L411.629 411.609H270.224L117.908 266.854C106.999 256.784 101.963 245.036 101.963 234.966C101.963 220.7 112.034 208.113 131.335 202.658L209.801 181.679C239.592 173.707 260.153 150.63 260.153 120.42C260.153 83.4968 229.941 62.0977 192.597 62.0977H0V0H251.761ZM1520.63 118.74C1591.97 118.74 1641.9 170.768 1641.9 245.034V411.608H1560.5V258.88C1560.5 216.922 1538.26 191.747 1498.81 191.747C1459.37 191.747 1433.78 217.761 1433.78 258.88V411.608H1354.05V124.614H1435.04L1431.26 170.349C1443.01 147.272 1479.51 118.74 1520.63 118.74ZM1826.52 191.749C1777.43 191.749 1751.42 228.252 1751.42 269.791C1751.42 314.266 1780.79 348.252 1826.52 348.252C1870.58 348.252 1899.11 313.847 1899.11 269.791C1899.11 225.735 1871.42 191.749 1826.52 191.749ZM543.803 183.355C504.138 183.355 481.475 207.041 474.442 238.74H611.728C610.893 235.09 609.818 231.188 608.421 226.992C598.35 198.461 574.853 183.356 543.803 183.355ZM1173.62 183.355C1134.3 183.356 1111.7 207.041 1104.68 238.74H1241.97C1241.13 235.09 1240.06 231.188 1238.66 226.992C1228.59 198.461 1205.09 183.355 1173.62 183.355Z" fill="#FDFDFD"></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
