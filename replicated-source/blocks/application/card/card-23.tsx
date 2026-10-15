import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-md min-h-svh p-8 w-full">
      <Frame className="isolate overflow-hidden">
        <FramePanel className="before:hidden flex flex-col gap-5 items-center justify-center p-7.5 z-10">
          <div className="[--tp-grid-opacity:0.12] [--tp-grid-stroke:color-mix(in_oklch,var(--color-foreground)_40%,transparent)] absolute bottom-[2px] dark:[--tp-grid-opacity:0.16] dark:[--tp-grid-stroke:color-mix(in_oklch,var(--color-foreground)_32%,transparent)] left-[2px] overflow-hidden pointer-events-none right-[2px] top-[3px] z-0" aria-hidden="true">
            <svg className="absolute inset-0 min-h-full min-w-full size-full" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <lineargradient id="_r_0_-tp-grad" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
                  <stop offset="48%" stopColor="white" stopOpacity="0.75"></stop>
                  <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                </lineargradient>
                <pattern id="_r_0_-tp-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path d="M 14 0 L 0 0 0 14" fill="none" stroke="var(--tp-grid-stroke)" strokeWidth="1" vector-effect="nonScalingStroke"></path>
                </pattern>
                <mask id="_r_0_-tp-fade" maskUnits="objectBoundingBox" maskcontentunits="objectBoundingBox">
                  <rect width="1" height="1" fill="url(#_r_0_-tp-grad)"></rect>
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#_r_0_-tp-grid)" mask="url(#_r_0_-tp-fade)" style={{opacity: "var(--tp-grid-opacity)"}}></rect>
            </svg>
          </div>
          <div className="flex gap-6 items-center justify-center relative z-10">
            <div className="flex gap-3.5 items-center text-center">
              <h3 className="font-semibold leading-tight text-6xl">
                {"24"}
              </h3>
              <div className="flex flex-col items-start">
                <h3 className="leading-relaxed text-muted-foreground text-xs">
                  {"Monitoring"}
                </h3>
                <div className="flex font-semibold gap-0.5 items-center leading-none text-muted-foreground/50">
                  <span className="text-2xl">
                    {"/"}
                  </span>
                  <span className="text-3xl">
                    {"7"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-muted/60 border-2 border-background dark:border flex items-center justify-center rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-17.5">
                <svg className="fill-[#FA4340] size-7.5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                  <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                </svg>
              </div>
              <div className="-mr-16 bg-muted/60 border-2 border-background dark:border flex items-center justify-center rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-17.5">
                <svg className="size-7.5" aria-hidden="true" viewBox="0 0 296 298" fill="none">
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
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center relative z-10">
            <div className="bg-muted/60 border-2 border-background dark:border flex items-center justify-center rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-17.5">
              <svg className="fill-[#F6C013] size-7" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
              </svg>
            </div>
            <div className="bg-muted/60 border-2 border-background dark:border flex items-center justify-center rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-17.5">
              <svg className="[&_*]:fill-[#14BB69] size-7.5" aria-hidden="true" viewBox="0 0 228 120">
                <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
              </svg>
            </div>
          </div>
        </FramePanel>
        <FramePanel className="before:hidden flex flex-col gap-3.5 items-center justify-center p-7.5! z-10">
          <div className="flex flex-col gap-3.5 items-center text-center">
            <h3 className="font-medium leading-tight text-lg">
              {"Always On Watch"}
            </h3>
            <p className="leading-relaxed text-accent-foreground text-sm">
              {"Get continuous oversight of market activity with automated tools running day and night."}
            </p>
          </div>
          <Button className="w-fit" type="button" tabIndex="0">
            {"Start Monitoring"}
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}
