import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="bg-muted/50 border-2 border-border flex-col inline-flex max-w-full p-1 rounded-lg">
        <Frame className="[--frame-radius:var(--radius-lg)] max-w-[392px] overflow-hidden w-full">
          <FramePanel className="border-0 isolate pb-7 pt-8 px-6 rounded-b-none shadow-none! text-center">
            <div className="absolute inset-0 opacity-70 pointer-events-none text-border z-0" aria-hidden="true">
              <svg className="size-full" viewBox="0 0 688 596" fill="none" preserveAspectRatio="none" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="_r_0_-panel-grid-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={688} height={596}>
                    <rect width={688} height={596} fill="url(#_r_0_-panel-grid-fade)"></rect>
                  </mask>
                  <lineargradient id="_r_0_-panel-grid-fade" x1={344} y1={0} x2={344} y2={596}>
                    <stop stopColor="white"></stop>
                    <stop offset={0.72} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <pattern id="_r_0_-panel-grid-pattern" width={12} height={12} patternUnits="userSpaceOnUse">
                    <path d="M 12 0 L 0 0 0 12" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width={688} height={596} fill="url(#_r_0_-panel-grid-pattern)" mask="url(#_r_0_-panel-grid-mask)"></rect>
              </svg>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="bg-[oklch(0.84_0.16_82)] relative rounded-full">
                <Avatar className="after:rounded-full rounded-full size-20" size="default">
                  <AvatarFallback className="rounded-full text-xl">
                    {"JK"}
                  </AvatarFallback>
                  <AvatarBadge className="bg-[oklch(0.68_0.2_148)] bottom-auto right-1.5 ring-[3px] ring-background size-3.5 top-1.5"></AvatarBadge>
                </Avatar>
              </div>
              <div className="flex gap-1.5 items-center justify-center max-w-full mt-3">
                <h2 className="font-semibold leading-tight text-base truncate">
                  {"Jenny Klabber"}
                </h2>
                <svg className="lucide lucide-badge-check shrink-0 size-4 text-[oklch(0.62_0.22_258)]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-label="Verified profile">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center justify-center leading-relaxed max-w-full mt-2 text-muted-foreground text-sm">
                <span className="flex gap-1.5 items-center min-w-0">
                  <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                  <span className="truncate">
                    {"Newcapec"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0">
                  <svg className="lucide lucide-mail shrink-0 size-4 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                  </svg>
                  <span className="truncate">
                    {"jenny@kteam.com"}
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center mt-4">
                <span className="leading-none text-muted-foreground/60 text-xs">
                  {"TEAM"}
                </span>
                <AvatarGroup>
                  <Avatar className="after:rounded-full rounded-full size-7" size="default">
                    <AvatarFallback className="bg-background font-medium rounded-full">
                      {"AL"}
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="after:rounded-full rounded-full size-7" size="default">
                    <AvatarFallback className="bg-background font-medium rounded-full">
                      {"MS"}
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="after:rounded-full rounded-full size-7" size="default">
                    <AvatarFallback className="bg-background font-medium rounded-full">
                      {"K"}
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="after:rounded-full rounded-full size-7" size="default">
                    <AvatarImage className="rounded-full" alt="Theo Vale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=88&h=88&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </AvatarGroup>
              </div>
              <Item className="bg-muted/60 grid grid-cols-[1fr_auto_1fr_auto_1fr] max-w-[284px] mt-6 p-0" variant="outline" size="sm">
                <div className="contents">
                  <Item className="bg-transparent px-2 py-2" variant="muted" size="sm">
                    <ItemContent className="gap-1.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                        {"92"}
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-center w-full whitespace-nowrap">
                        {"Orders"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Separator className="my-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                </div>
                <div className="contents">
                  <Item className="bg-transparent px-2 py-2" variant="muted" size="sm">
                    <ItemContent className="gap-1.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                        {"$69"}
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-center w-full whitespace-nowrap">
                        {"Avg. Price"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Separator className="my-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                </div>
                <div className="contents">
                  <Item className="bg-transparent px-2 py-2" variant="muted" size="sm">
                    <ItemContent className="gap-1.5 items-center min-w-0">
                      <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                        {"$6,240"}
                      </ItemTitle>
                      <ItemDescription className="leading-tight text-[11px] text-center w-full whitespace-nowrap">
                        {"Total Spent"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </div>
              </Item>
            </div>
          </FramePanel>
          <footer className="bg-muted/20 flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-6! py-(--frame-panel-footer-py) py-3.5!">
            <Button className="font-medium h-8 min-w-[108px] mx-auto px-3 rounded-md text-xs" type="button" tabIndex={0}>
              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" data-icon="inline-start" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              {"Connected"}
            </Button>
          </footer>
        </Frame>
      </div>
    </div>
  )
}
