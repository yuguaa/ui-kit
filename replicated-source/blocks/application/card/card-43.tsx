import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarBadge,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-[400px] overflow-hidden w-full">
        <FramePanel className="flex flex-col gap-4 shadow-none!">
          <div className="bg-center bg-cover brightness-105 grayscale-[.72] h-[124px] overflow-hidden rounded-lg saturate-50" aria-hidden="true" style={{backgroundImage: "url(\"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&h=320&q=82\")"}}></div>
          <div className="-mt-10 gap-x-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-end px-4">
            <Avatar className="after:rounded-full bg-background ring-[3px] ring-background rounded-full size-18" size="default">
              <AvatarImage className="rounded-full" alt="Ralph Edwards" src="https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?w=160&h=160&fit=crop&crop=faces&auto=format&q=80"></AvatarImage>
              <AvatarBadge className="bg-[oklch(0.7_0.22_148)] bottom-1 right-1 ring-background size-2.5"></AvatarBadge>
            </Avatar>
            <div className="flex flex-col gap-1 mb-2 min-h-0 min-w-0 pl-0.5">
              <div className="flex gap-1.5 items-center min-w-0">
                <h2 className="font-semibold leading-none m-0 shrink-0 text-sm">
                  {"Ralph Edwards"}
                </h2>
                <svg className="lucide lucide-badge-check shrink-0 size-3 text-[oklch(0.62_0.22_258)]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-label="Verified profile">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <p className="leading-none m-0 text-muted-foreground text-xs truncate">
                {"Sacramento, California"}
              </p>
            </div>
            <Button className="mb-1.5 rounded-sm" type="button" tabIndex={0}>
              <svg className="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" data-icon="inline-start" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <circle cx={12} cy={10} r={3}></circle>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
              </svg>
              {"View Profile"}
            </Button>
          </div>
          <ScrollArea className="-mx-1 pb-3 px-1" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
            <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none overflow-x-auto overflow-y-hidden rounded-lg size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_0_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "58px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
              <div className="flex gap-2 w-max">
                <article className="bg-background border overflow-hidden rounded-sm shrink-0 w-[136px]">
                  <div className="bg-muted h-[106px] overflow-hidden relative">
                    <img className="absolute h-full inset-0 object-cover w-full" alt="Analytics Suite" width={320} height={240} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=320&h=240&q=80" />
                  </div>
                  <div className="flex flex-col gap-0.5 p-2">
                    <h3 className="font-medium leading-tight text-sm truncate">
                      {"Analytics Suite"}
                    </h3>
                    <p className="leading-none text-muted-foreground text-xs">
                      {"Project ID:"}
                      <span className="font-medium text-xs">
                        {"PX-102"}
                      </span>
                    </p>
                  </div>
                </article>
                <article className="bg-background border overflow-hidden rounded-sm shrink-0 w-[136px]">
                  <div className="bg-muted h-[106px] overflow-hidden relative">
                    <img className="absolute h-full inset-0 object-cover w-full" alt="Mobile Checkout" width={320} height={240} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=320&h=240&q=80" />
                  </div>
                  <div className="flex flex-col gap-0.5 p-2">
                    <h3 className="font-medium leading-tight text-sm truncate">
                      {"Mobile Checkout"}
                    </h3>
                    <p className="leading-none text-muted-foreground text-xs">
                      {"Project ID:"}
                      <span className="font-medium text-xs">
                        {"UX-384"}
                      </span>
                    </p>
                  </div>
                </article>
                <article className="bg-background border overflow-hidden rounded-sm shrink-0 w-[136px]">
                  <div className="bg-muted h-[106px] overflow-hidden relative">
                    <img className="absolute h-full inset-0 object-cover w-full" alt="Metrics Console" width={320} height={240} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=320&h=240&q=80" />
                  </div>
                  <div className="flex flex-col gap-0.5 p-2">
                    <h3 className="font-medium leading-tight text-sm truncate">
                      {"Metrics Console"}
                    </h3>
                    <p className="leading-none text-muted-foreground text-xs">
                      {"Project ID:"}
                      <span className="font-medium text-xs">
                        {"DS-471"}
                      </span>
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_0_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "314.20754716981133px"}}>
              <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
            </div>
          </ScrollArea>
          <Button className="bg-invert hover:bg-invert/90 rounded-sm text-invert-foreground w-full" type="button" tabIndex={0}>
            {"Get in Touch"}
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}
