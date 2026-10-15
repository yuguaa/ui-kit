import { Frame } from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-4xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-1 grid">
          <Frame className="overflow-hidden">
            <div className="flex flex-col gap-4 px-5 py-5">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-green-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-4">
                <a className="block font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                  {"Ordering & Billing Guide"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {"Step-by-step instructions for checkout, invoices, taxes, and returns."}
                </p>
              </div>
            </div>
            <div className="w-full">
              <nav className="flex flex-col" aria-label="Guides">
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Place an order guide"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Request a refund guide"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </Frame>
          <Frame className="overflow-hidden">
            <div className="flex flex-col gap-4 px-5 py-5">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-orange-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx={17} cy={17} r={3}></circle>
                    <circle cx={7} cy={7} r={3}></circle>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-4">
                <a className="block font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                  {"Configuration & Integrations"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {"Setup for accounts, permissions, webhooks, and third-party connections."}
                </p>
              </div>
            </div>
            <div className="w-full">
              <nav className="flex flex-col" aria-label="Guides">
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Connect Slack and Trello"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Create API keys securely"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </Frame>
          <Frame className="overflow-hidden">
            <div className="flex flex-col gap-4 px-5 py-5">
              <Item className="[&_svg]:size-5 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-4">
                <a className="block font-medium hover:text-primary leading-tight text-foreground text-sm" href="#">
                  {"Media Library Introduction"}
                </a>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {"Basics for uploading images, organizing folders, and optimizing delivery."}
                </p>
              </div>
            </div>
            <div className="w-full">
              <nav className="flex flex-col" aria-label="Guides">
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Upload and organize assets"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="border-border/60 border-t group">
                  <a className="flex gap-2 group-hover:bg-muted/60 group-hover:text-primary items-center justify-between leading-relaxed px-5 py-3 text-foreground text-xs transition-colors w-full" href="#">
                    <span>
                      {"Image optimization best practices"}
                    </span>
                    <svg className="group-hover:text-primary lucide lucide-arrow-up-right shrink-0 size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </Frame>
        </div>
      </Frame>
    </div>
  )
}
