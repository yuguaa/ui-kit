import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-4xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-1 grid">
          <FramePanel className="space-y-7.5">
            <div className="flex gap-2 items-center justify-between">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-corner-up-right text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpRightIcon" tabler="IconCornerUpRight" hugeicons="ArrowMoveUpRightIcon" phosphor="ArrowBendUpRightIcon" remixicon="RiCornerUpRightLine" aria-hidden="true">
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-2.5">
              <a className="block font-semibold hover:text-primary leading-tight text-foreground text-sm" href="#">
                {"Mobile Banking App Upgrade"}
              </a>
              <div className="flex gap-1.5 items-center">
                <span className="font-medium leading-relaxed text-foreground text-xs">
                  {"FivonaTech"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                <div className="flex gap-0.5">
                  <span className="leading-relaxed text-muted-foreground text-xs">
                    {"Due:"}
                  </span>
                  <span className="font-medium leading-relaxed text-foreground text-xs">
                    {"1d 18h"}
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="space-y-7.5">
            <div className="flex gap-2 items-center justify-between">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx={17} cy={17} r={3}></circle>
                    <circle cx={7} cy={7} r={3}></circle>
                  </svg>
                </ItemMedia>
              </Item>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-corner-up-right text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpRightIcon" tabler="IconCornerUpRight" hugeicons="ArrowMoveUpRightIcon" phosphor="ArrowBendUpRightIcon" remixicon="RiCornerUpRightLine" aria-hidden="true">
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-2.5">
              <a className="block font-semibold hover:text-primary leading-tight text-foreground text-sm" href="#">
                {"Crypto Portfolio Dashboard"}
              </a>
              <div className="flex gap-1.5 items-center">
                <span className="font-medium leading-relaxed text-foreground text-xs">
                  {"BlockEdge"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                <div className="flex gap-0.5">
                  <span className="leading-relaxed text-muted-foreground text-xs">
                    {"Due:"}
                  </span>
                  <span className="font-medium leading-relaxed text-foreground text-xs">
                    {"2d 20h"}
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
          <FramePanel className="space-y-7.5">
            <div className="flex gap-2 items-center justify-between">
              <Item className="[&_svg]:size-5 [&_svg]:text-white [background:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%),#000] border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <Button type="button" tabIndex={0}>
                <svg className="lucide lucide-corner-up-right text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CornerUpRightIcon" tabler="IconCornerUpRight" hugeicons="ArrowMoveUpRightIcon" phosphor="ArrowBendUpRightIcon" remixicon="RiCornerUpRightLine" aria-hidden="true">
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                </svg>
              </Button>
            </div>
            <div className="flex flex-col gap-2.5">
              <a className="block font-semibold hover:text-primary leading-tight text-foreground text-sm" href="#">
                {"AI-Powered Analytics Module"}
              </a>
              <div className="flex gap-1.5 items-center">
                <span className="font-medium leading-relaxed text-foreground text-xs">
                  {"DataNexus"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                <div className="flex gap-0.5">
                  <span className="leading-relaxed text-muted-foreground text-xs">
                    {"Due:"}
                  </span>
                  <span className="font-medium leading-relaxed text-foreground text-xs">
                    {"3d 6h"}
                  </span>
                </div>
              </div>
            </div>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
